/************************************************************
 * CONFIGURAÇÕES EMAILJS
 ************************************************************/
const EMAILJS_SERVICE_ID = "service_vjk4zve";       // <- seu Service ID
const EMAILJS_TEMPLATE_ID = "template_vfqog6o"; // <- seu Template ID

/************************************************************
 * USUÁRIOS AUTORIZADOS (USO ÚNICO)
 ************************************************************/
const users = [
    { login: "aluno01", senha: "4321" },
    { login: "aluno02", senha: "4321" },
    { login: "aluno03", senha: "4321" },
    { login: "aluno04", senha: "4321" },
    { login: "aluno05", senha: "4321" },
    { login: "aluno06", senha: "4321" },
    { login: "aluno07", senha: "4321" },
    { login: "aluno08", senha: "4321" },
    { login: "aluno09", senha: "4321" },
    { login: "aluno10", senha: "4321" },
    { login: "aluno11", senha: "4321" },
    { login: "igor", senha: "1234" },
    { login: "mykael", senha: "1234" },
    { login: "rita", senha: "1234" },
    { login: "adriano", senha: "1234" },
    { login: "leonardo", senha: "1234" },
    { login: "isabelly", senha: "1234" },
    { login: "thiago", senha: "1234" },
    { login: "luiz", senha: "1234" },
    { login: "jeany", senha: "1234" },
];

/************************************************************
 * VARIÁVEIS DE CONTROLE
 ************************************************************/
let currentUser = null;
let currentQuestion = 0;
let quizFinished = false;

/************************************************************
 * PERGUNTAS
 ************************************************************/
const questions = [
    {
        text: "1. Qual será a saída do código: int x = 5; x += 3; System.out.println(x);",
        options: ["5", "8", "15", "Erro de compilação"],
        correct: 1
    },
    {
        text: "2. Qual operador é usado para verificar igualdade de valores primitivos em Java?",
        options: ["=", "equals", "==", "!="],
        correct: 2
    },
    {
        text: "3. O que acontece se um if não tiver else?",
        options: ["O código não compila", "O programa lança exceção", "O bloco if pode ou não ser executado", "O if é ignorado"],
        correct: 2
    },
    {
        text: "4. Qual será a saída do código: int a = 10; int b = 3; System.out.println(a / b);",
        options: ["3.33", "3", "3.0", "Erro de execução"],
        correct: 1
    },
    {
        text: "5. Qual tipo armazena números decimais maiores?",
        options: ["int", "float", "double", "long"],
        correct: 2
    },
    {
        text: "6. Qual laço executa pelo menos uma vez, independentemente da condição?",
        options: ["for", "while", "if", "do-while"],
        correct: 3
    },
    {
        text: "7. O que o operador % faz?",
        options: ["Divide dois números", "Retorna o quociente", "Retorna o resto da divisão", "Retorna o valor absoluto"],
        correct: 2
    },
    {
        text: "8. Qual será o valor final de x após: int x = 2; x *= 4;",
        options: ["6", "8", "2", "4"],
        correct: 1
    },
    {
        text: "9. Qual palavra-chave interrompe um laço imediatamente?",
        options: ["stop", "exit", "break", "continue"],
        correct: 2
    },
    {
        text: "10. O que usamos para percorrer um vetor chamado lista?",
        options: ["System.out.println(lista[]);", "if / else", "break", "for"],
        correct: 4
    },
    {
        text: "11. Qual é o valor dentro de uma matriz de Strings que não teve seus itens declarados?",
        options: ["0", "null", "false", "Não possui valor padrão"],
        correct: 2
    },
    {
        text: "12. Qual será a saída do código: int x = 7; if (x > 5) {System.out.println('A'); System.out.println('B');}",
        options: ["Apenas A", "Apenas B", "A e B", "Nada"],
        correct: 2
    },
    {
        text: "13. Qual tipo é usado para armazenar apenas true ou false?",
        options: ["Boolean", "bool", "int", "char"],
        correct: 1
    },
    {
        text: "14. O que acontece se um while tiver condição sempre falsa?",
        options: ["Executa uma vez", "Executa infinitamente", "Não executa", "Lança erro"],
        correct: 2
    },
    {
        text: "15. Qual será a saída do código: int x = 0; while (x < 3) { System.out.print(x); x++; }",
        options: ["012", "123", "0123", "321"],
        correct: 0
    },
    {
        text: "16. Qual palavra-chave é usada para retornar um valor de um método?",
        options: ["break", "void", "return", "static"],
        correct: 2
    },
    {
        text: "17. Qual será a saída de: System.out.println(5 + 2 + \"3\");",
        options: ["10", "73", "523", "Erro"],
        correct: 1
    },
    {
        text: "18. Qual será a saída de: System.out.println(\"3\" + 5 + 2);",
        options: ["10", "352", "37", "Erro"],
        correct: 1
    },
    {
        text: "19. Qual estrutura é usada para múltiplas decisões baseadas em um único valor?",
        options: ["if", "while", "for", "switch"],
        correct: 3
    },
    {
        text: "20. Qual será a saída do código: int x = 5; System.out.println(x++ + ++x);",
        options: ["10", "11", "12", "Erro de compilação"],
        correct: 1
    }
];


/************************************************************
 * RESULTADO
 ************************************************************/
const results = {
    login: "",
    status: "",
    score: 0,
    answers: []
};

/************************************************************
 * LOGIN
 ************************************************************/
function logar() {
    const login = document.getElementById("login").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const error = document.getElementById("login-error");

    const usedUsers = JSON.parse(localStorage.getItem("usedUsers")) || [];

    if (usedUsers.includes(login)) {
        error.innerText = "Este usuário já realizou o teste.";
        return;
    }

    const found = users.find(u => u.login === login && u.senha === senha);
    if (!found) {
        error.innerText = "Login ou senha inválidos.";
        return;
    }

    currentUser = login;
    results.login = login;

    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");

    showQuestion();
}

/************************************************************
 * MOSTRAR QUESTÃO
 ************************************************************/
function showQuestion() {
    const q = questions[currentQuestion];
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

/************************************************************
 * PRÓXIMA QUESTÃO + MOSTRAR RESPOSTA CORRETA
 ************************************************************/
function nextQuestion() {
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) {
        alert("Selecione uma opção antes de avançar.");
        return;
    }

    const q = questions[currentQuestion];
    const selectedIdx = parseInt(selected.value);
    const isCorrect = selectedIdx === q.correct;

    results.answers.push({
        question: q.text,
        selected: q.options[selectedIdx],
        correct: q.options[q.correct],
        isCorrect: isCorrect
    });

    if (isCorrect) results.score++;

    alert(`Resposta correta: ${q.options[q.correct]}`);

    currentQuestion++;

    if (currentQuestion >= questions.length) {
        finishQuiz("Teste concluído com sucesso");
    } else {
        showQuestion();
    }
}

/************************************************************
 * FINALIZAR QUIZ
 ************************************************************/
function finishQuiz(status) {
    if (quizFinished) return;
    quizFinished = true;

    results.status = status;

    const usedUsers = JSON.parse(localStorage.getItem("usedUsers")) || [];
    usedUsers.push(currentUser);
    localStorage.setItem("usedUsers", JSON.stringify(usedUsers));

    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("result-screen").classList.remove("hidden");

    document.getElementById("score").innerText =
        status === "Teste concluído com sucesso"
            ? `Pontuação: ${results.score} de ${questions.length}`
            : "Teste INVALIDADO";

    sendResultsByEmail();
}

/************************************************************
 * INVALIDAÇÃO AUTOMÁTICA (TROCA DE ABA / PERDA DE FOCO)
 ************************************************************/
document.addEventListener("visibilitychange", () => {
    if (document.hidden && currentUser && !quizFinished) {
        results.score = 0;
        results.answers = [];
        finishQuiz("Teste invalidado (troca de aba ou abandono)");
    }
});

/************************************************************
 * ENVIO DE E-MAIL
 ************************************************************/
function sendResultsByEmail() {
    const templateParams = {
        login: results.login,
        status: results.status,
        score: `${results.score} de ${questions.length}`,
        date: new Date().toLocaleString("pt-BR"),
        result_json: JSON.stringify(results, null, 2)
    };

    emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
    ).then(
        () => console.log("E-mail enviado com sucesso"),
        error => console.error("Erro ao enviar e-mail:", error)
    );
}

/************************************************************
 * DOWNLOAD DO JSON
 ************************************************************/
function downloadResults() {
    const blob = new Blob([JSON.stringify(results, null, 2)], {
        type: "application/json"
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `resultado-${results.login}.json`;
    a.click();
    URL.revokeObjectURL(url);
}
