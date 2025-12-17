/* =====================================================
   USUÁRIOS (USO ÚNICO)
===================================================== */

const USERS = [
    { login: "aluno01", senha: "1234" },
    { login: "aluno02", senha: "1234" },
    { login: "aluno03", senha: "1234" },
    { login: "aluno04", senha: "1234" },
    { login: "aluno05", senha: "1234" },
    { login: "aluno06", senha: "1234" },
    { login: "aluno07", senha: "1234" },
    { login: "aluno08", senha: "1234" },
    { login: "aluno09", senha: "1234" },
    { login: "aluno10", senha: "1234" },
    { login: "aluno11", senha: "1234" }
];

function getUsedUsers() {
    return JSON.parse(localStorage.getItem("usedUsers")) || [];
}

function markUserAsUsed(login) {
    const used = getUsedUsers();
    if (!used.includes(login)) {
        used.push(login);
        localStorage.setItem("usedUsers", JSON.stringify(used));
    }
}

function isUserUsed(login) {
    return getUsedUsers().includes(login);
}

/* =====================================================
   VARIÁVEIS DE CONTROLE
===================================================== */

let currentUser = null;
let currentQuestion = 0;
let quizStarted = false;
let quizInvalidated = false;

const results = {
    login: "",
    answers: [],
    score: 0,
    status: "CONCLUÍDO"
};

/* =====================================================
   QUESTÕES
===================================================== */

const QUESTIONS = [
    { text: "1. Qual será a saída de: System.out.println(5 + 3 * 2);", options: ["16", "11", "10", "26"], correct: 1 },
    { text: "2. Qual tipo armazena true/false?", options: ["char", "boolean", "int", "String"], correct: 1 },
    { text: "3. Operador de igualdade?", options: ["=", "==", ":=", "<>"], correct: 1 },
    { text: "4. Qual palavra declara uma classe?", options: ["function", "class", "struct", "define"], correct: 1 },
    { text: "5. Qual o operador AND lógico?", options: ["&&", "||", "!", "^"], correct: 0 }
];

/* =====================================================
   LOGIN
===================================================== */

function logar() {
    const login = document.getElementById("login").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const error = document.getElementById("login-error");

    error.innerText = "";

    const valid = USERS.find(u => u.login === login && u.senha === senha);
    if (!valid) {
        error.innerText = "Login ou senha inválidos.";
        return;
    }

    if (isUserUsed(login)) {
        error.innerText = "Este usuário já realizou o teste.";
        return;
    }

    currentUser = login;
    results.login = login;
    quizStarted = true;

    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");

    showQuestion();
}

/* =====================================================
   EXIBIÇÃO DA QUESTÃO
===================================================== */

function showQuestion() {
    const q = QUESTIONS[currentQuestion];
    document.getElementById("question-text").innerText = q.text;

    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.options.forEach((opt, idx) => {
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="option" value="${idx}">
            ${opt}
        `;
        answersDiv.appendChild(label);
    });
}

/* =====================================================
   PROCESSAMENTO DA RESPOSTA
===================================================== */

function nextQuestion() {
    if (quizInvalidated) return;

    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) {
        alert("Selecione uma alternativa.");
        return;
    }

    const q = QUESTIONS[currentQuestion];
    const answerIdx = parseInt(selected.value);

    document.querySelectorAll('input[name="option"]').forEach(r => r.disabled = true);

    const labels = document.querySelectorAll("#answers label");

    labels[q.correct].style.border = "2px solid #2ecc71";
    labels[q.correct].style.background = "#1b3d2f";

    if (answerIdx !== q.correct) {
        labels[answerIdx].style.border = "2px solid #e74c3c";
        labels[answerIdx].style.background = "#3a1b1b";
    }

    results.answers.push({
        question: q.text,
        selected: q.options[answerIdx],
        correct: q.options[q.correct]
    });

    if (answerIdx === q.correct) {
        results.score++;
    }

    setTimeout(() => {
        currentQuestion++;
        currentQuestion >= QUESTIONS.length ? showResults() : showQuestion();
    }, 1200);
}

/* =====================================================
   RESULTADO FINAL
===================================================== */

function showResults() {
    quizStarted = false;
    markUserAsUsed(results.login);

    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");

    const scoreText = quizInvalidated
        ? "Teste INVALIDADO por saída da página."
        : `Pontuação: ${results.score} de ${QUESTIONS.length}`;

    document.getElementById("score").innerText = scoreText;
}

/* =====================================================
   DOWNLOAD
===================================================== */

function downloadResults() {
    const blob = new Blob([JSON.stringify(results, null, 2)], {
        type: "application/json"
    });

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `resultado-${results.login}.json`;
    a.click();
}

/* =====================================================
   INVALIDAÇÃO AO TROCAR DE ABA
===================================================== */

document.addEventListener("visibilitychange", () => {
    if (quizStarted && document.hidden) {
        invalidateQuiz();
    }
});

window.addEventListener("blur", () => {
    if (quizStarted) {
        invalidateQuiz();
    }
});

function invalidateQuiz() {
    if (quizInvalidated) return;

    quizInvalidated = true;
    quizStarted = false;

    results.score = 0;
    results.status = "INVALIDADO";

    markUserAsUsed(results.login);

    showResults();
}
