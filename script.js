/************************************************************
 * CONFIGURAÇÕES EMAILJS
 ************************************************************/
const EMAILJS_SERVICE_ID = "service_vjk4zve";
const EMAILJS_TEMPLATE_ID = "template_vfqog6o";

/************************************************************
 * USUÁRIOS AUTORIZADOS (USO ÚNICO)
 ************************************************************/
const users = [
    { login: "elisandra", senha: "123456" },
    { login: "lais", senha: "123456" },
    { login: "lucas", senha: "123456" },
    { login: "pollyana", senha: "123456" },
    { login: "debora", senha: "123456" },
    { login: "thiago", senha: "123456" },
    { login: "iago", senha: "123456" },
    { login: "gabriel", senha: "123456" },
    { login: "vinicius", senha: "123456" },
    { login: "felipe", senha: "123456" },
    { login: "fabio", senha: "123456" },
    { login: "miqueias", senha: "123456" },
    { login: "francisco", senha: "123456" },
    { login: "iara", senha: "123456" },
    { login: "layla", senha: "123456" },
    { login: "danilo", senha: "123456" },
    { login: "aluno17", senha: "123456" },
    { login: "aluno18", senha: "123456" },
    { login: "aluno19", senha: "123456" },
    { login: "aluno20", senha: "123456" },
    { login: "aluno21", senha: "123456" },
    { login: "aluno22", senha: "123456" },
    { login: "aluno23", senha: "123456" },
    { login: "aluno24", senha: "123456" },
    { login: "aluno25", senha: "123456" },
    { login: "aluno26", senha: "123456" },
    { login: "alunoteste", senha: "1234" },
    { login: "testealuno", senha: "1234" }
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
        text: "0. Qual seu nome completo?",
        type: "text",
        required: true
    },
    {
        text: "1. Qual função é utilizada para exibir uma mensagem na tela em Python?",
        options: [
            "show()",
            "echo()",
            "print()",
            "display()"
        ],
        correct: 2
    },
    {
        text: "2. Qual função permite receber dados digitados pelo usuário?",
        options: [
            "read()",
            "scan()",
            "input()",
            "print()"
        ],
        correct: 2
    },
    {
        text: "3. Qual destes é um tipo de dado inteiro em Python?",
        options: [
            "int",
            "string",
            "float",
            "bool"
        ],
        correct: 0
    },
    {
        text: "4. Qual operador representa a potência em Python?",
        options: [
            "^",
            "**",
            "//",
            "%"
        ],
        correct: 1
    },
    {
        text: "5. Qual operador retorna o resto da divisão?",
        options: [
            "//",
            "%",
            "/",
            "**"
        ],
        correct: 1
    },
    {
        text: "6. Qual operador representa 'maior ou igual'?",
        options: [
            ">=",
            "=>",
            "><",
            "=="
        ],
        correct: 0
    },
    {
        text: "7. O operador '==' serve para:",
        options: [
            "Atribuir um valor",
            "Comparar dois valores",
            "Somar números",
            "Criar variáveis"
        ],
        correct: 1
    },
    {
        text: "8. Qual operador lógico retorna verdadeiro somente quando ambas as condições são verdadeiras?",
        options: [
            "or",
            "and",
            "not",
            "xor"
        ],
        correct: 1
    },
    {
        text: "9. Qual estrutura é utilizada para tomar decisões em Python?",
        options: [
            "for",
            "while",
            "if",
            "list"
        ],
        correct: 2
    },
    {
        text: "10. O comando elif é utilizado para:",
        options: [
            "Encerrar o programa",
            "Criar uma repetição",
            "Adicionar uma nova condição",
            "Declarar uma variável"
        ],
        correct: 2
    },
    {
        text: "11. O bloco else será executado quando:",
        options: [
            "A condição do if for verdadeira",
            "Nenhuma condição anterior for verdadeira",
            "Sempre",
            "Nunca"
        ],
        correct: 1
    },
    {
        text: "12. Qual estrutura é utilizada quando sabemos exatamente quantas vezes um bloco será repetido?",
        options: [
            "while",
            "for",
            "if",
            "match"
        ],
        correct: 1
    },
    {
        text: "13. O while executa enquanto:",
        options: [
            "A condição for verdadeira",
            "O programa estiver aberto",
            "O usuário pressionar Enter",
            "Existir uma lista"
        ],
        correct: 0
    },
    {
        text: "14. Qual destas opções representa corretamente uma lista?",
        options: [
            "(1,2,3)",
            "{1,2,3}",
            "[1,2,3]",
            "<1,2,3>"
        ],
        correct: 2
    },
    {
        text: "15. Qual método adiciona um novo elemento ao final de uma lista?",
        options: [
            "insert()",
            "append()",
            "push()",
            "add()"
        ],
        correct: 1
    },
    {
        text: "16. Qual característica diferencia uma tupla de uma lista?",
        options: [
            "A tupla pode ser alterada",
            "A lista é imutável",
            "A tupla é imutável",
            "Não existe diferença"
        ],
        correct: 2
    },
    {
        text: "17. Qual destas opções representa corretamente uma tupla?",
        options: [
            "[1,2,3]",
            "(1,2,3)",
            "{1,2,3}",
            "<1,2,3>"
        ],
        correct: 1
    },
    {
        text: "18. Em um dicionário, cada informação é formada por:",
        options: [
            "Linha e coluna",
            "Índice e valor",
            "Chave e valor",
            "Nome e lista"
        ],
        correct: 2
    },
    {
        text: "19. Qual destas opções representa corretamente um dicionário?",
        options: [
            "[1,2,3]",
            "(1,2,3)",
            "{'nome':'Maria','idade':20}",
            "<1,2,3>"
        ],
        correct: 2
    },
    {
        text: "20. O comando match...case é utilizado para:",
        options: [
            "Criar listas",
            "Substituir vários if e elif quando há comparação de valores",
            "Criar funções",
            "Fazer repetições"
        ],
        correct: 1
    }
];

/************************************************************
 * RESULTADO
 ************************************************************/
const results = {
    login: "",
    nome: "",
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

    if (q.type === "text") {
        const input = document.createElement("input");
        input.type = "text";
        input.id = "text-answer";
        input.placeholder = "Digite seu nome completo";
        input.style.padding = "10px";
        input.style.width = "100%";
        input.style.marginTop = "10px";
        answersDiv.appendChild(input);
        return;
    }

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
 * PRÓXIMA QUESTÃO
 ************************************************************/
function nextQuestion() {
    const q = questions[currentQuestion];

    if (q.type === "text") {
        const textInput = document.getElementById("text-answer");

        if (!textInput.value.trim()) {
            alert("Digite seu nome antes de avançar.");
            return;
        }

        results.nome = textInput.value; // CORREÇÃO ADICIONADA

        results.answers.push({
            question: q.text,
            selected: textInput.value,
            correct: "N/A",
            isCorrect: true
        });

        currentQuestion++;
        showQuestion();
        return;
    }

    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) {
        alert("Selecione uma opção antes de avançar.");
        return;
    }

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
 * FINALIZAR QUIZ (COM NOME NO RESULTADO)
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

    const nomeAluno = results.nome || "Não informado";

    document.getElementById("score").innerText =
        status === "Teste concluído com sucesso"
            ? `Aluno: ${nomeAluno}\nPontuação: ${results.score} de ${questions.length}`
            : "Teste INVALIDADO";

    sendResultsByEmail();
}

/************************************************************
 * INVALIDAÇÃO AUTOMÁTICA
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
        nome: results.nome, // CORREÇÃO ADICIONADA
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