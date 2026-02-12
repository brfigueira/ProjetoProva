/************************************************************
 * CONFIGURAÇÕES EMAILJS
 ************************************************************/
const EMAILJS_SERVICE_ID = "service_vjk4zve";       // <- seu Service ID
const EMAILJS_TEMPLATE_ID = "template_vfqog6o"; // <- seu Template ID

/************************************************************
 * USUÁRIOS AUTORIZADOS (USO ÚNICO)
 ************************************************************/
const users = [
    { login: "aluno01", senha: "a9k3m7q2" },
    { login: "aluno02", senha: "m2q8a9k7" },
    { login: "aluno03", senha: "7kq9a2m3" },
    { login: "aluno04", senha: "q7m2k9a8" },
    { login: "aluno05", senha: "9a7k2m8q" },
    { login: "aluno06", senha: "k8q7m2a9" },
    { login: "aluno07", senha: "2m9a7kq8" },
    { login: "aluno08", senha: "7qk2a9m8" },
    { login: "aluno09", senha: "a8m9k2q7" },
    { login: "aluno10", senha: "k2q8m7a9" },
    { login: "aluno11", senha: "9m7a2kq8" },

    { login: "aluno12", senha: "b6r4n8t2" },
    { login: "aluno13", senha: "4t2b8n6r" },
    { login: "aluno14", senha: "n2r6b8t4" },
    { login: "aluno15", senha: "8b4t6r2n" },
    { login: "aluno16", senha: "r6n2t8b4" },
    { login: "aluno17", senha: "2b8r4n6t" },
    { login: "aluno18", senha: "t4n2b6r8" },
    { login: "aluno19", senha: "6r8t4b2n" },
    { login: "aluno20", senha: "n6b2r8t4" },
    { login: "aluno21", senha: "8t2n4r6b" },
    { login: "aluno22", senha: "r4b6t8n2" },
    { login: "aluno23", senha: "2n8r6b4t" },
    { login: "aluno24", senha: "b2t6n8r4" },
    { login: "aluno25", senha: "6n4r2t8b" },
    { login: "aluno26", senha: "t8b6r4n2" },

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
// Baseado no Plano de Curso "Programação em Inteligência Artificial Generativa" (SENAI-SP, 2023) :contentReference[oaicite:0]{index=0}
const questions = [
  {
        text: "0. Qual seu nome completo?",
        type: "text",
        required: true
    },
  {
    text: "1. Qual alternativa descreve melhor o objetivo de usar IA generativa em soluções de software?",
    options: [
      "Apenas criar imagens artísticas sem relação com sistemas",
      "Implementar soluções de software usando IA generativa, corrigindo erros e melhorando código e desempenho",
      "Substituir totalmente programadores por modelos prontos",
      "Aumentar a velocidade da internet do laboratório"
    ],
    correct: 1
  },
  {
    text: "2. Para acompanhar um curso de programação com IA generativa, qual requisito de acesso técnico é explicitado no plano?",
    options: [
      "Experiência anterior em programação de computadores",
      "Experiência anterior em modelagem 3D",
      "Apenas informática básica",
      "Apenas saber usar redes sociais"
    ],
    correct: 0
  },
  {
    text: "3. Qual linguagem é recomendada no plano para elaborar programas de IA, devido ao uso de bibliotecas?",
    options: ["Java", "C#", "Python", "PHP"],
    correct: 2
  },
  {
    text: "4. Em programação, o que é um bug (erro) mais comum em aplicações?",
    options: [
      "Uma melhoria de performance automática",
      "Um comportamento incorreto do programa (ex.: travar, resultado errado)",
      "Um recurso de segurança do sistema operacional",
      "Um tipo de rede neural"
    ],
    correct: 1
  },
  {
    text: "5. Qual prática ajuda mais a 'identificar e corrigir erros' em código?",
    options: [
      "Ignorar mensagens de erro",
      "Testar o programa e analisar logs/saídas e mensagens de exceção",
      "Trocar a linguagem do projeto sem motivo",
      "Remover todas as validações de entrada"
    ],
    correct: 1
  },
  {
    text: "6. Qual das opções abaixo é um exemplo de Inteligência Artificial (IA) no contexto do curso?",
    options: [
      "Planilha com fórmulas fixas",
      "Algoritmo que aprende padrões a partir de dados para tomar decisões",
      "Arquivo PDF com instruções",
      "Banco de dados relacional sem modelos"
    ],
    correct: 1
  },
  {
    text: "7. Qual alternativa define melhor 'Aprendizado de Máquina' (Machine Learning)?",
    options: [
      "Programar todas as regras manualmente para cada caso",
      "Treinar modelos a partir de dados para reconhecer padrões e fazer previsões/decisões",
      "Somente criar interfaces gráficas",
      "Somente armazenar dados em nuvem"
    ],
    correct: 1
  },
  {
    text: "8. Em Machine Learning, qual é a diferença principal entre aprendizado supervisionado e não supervisionado?",
    options: [
      "Supervisionado não usa dados; não supervisionado usa dados",
      "Supervisionado usa dados rotulados (com resposta); não supervisionado busca padrões sem rótulos",
      "Supervisionado só funciona com imagens; não supervisionado só com texto",
      "Não existe diferença"
    ],
    correct: 1
  },
  {
    text: "9. Qual cenário é mais compatível com aprendizado por reforço?",
    options: [
      "Classificar e-mails como spam/ham com exemplos rotulados",
      "Agrupar clientes por comportamento sem rótulos",
      "Um agente aprender jogando (recebendo recompensa/punição) para melhorar decisões",
      "Somar valores de uma coluna no Excel"
    ],
    correct: 2
  },
  {
    text: "10. Por que pré-processamento de dados é importante antes de treinar um modelo?",
    options: [
      "Porque torna o hardware mais barato",
      "Porque melhora a qualidade do dado (limpeza, normalização, tratamento de faltantes) e impacta o desempenho do modelo",
      "Porque substitui a etapa de avaliação",
      "Porque impede qualquer viés automaticamente"
    ],
    correct: 1
  },
  {
    text: "11. Qual métrica/abordagem é mais apropriada para avaliar um modelo de classificação?",
    options: ["Apenas tamanho do dataset", "Acurácia, precisão, recall (dependendo do problema)", "Quantidade de pastas no projeto", "Número de linhas de código"],
    correct: 1
  },
  {
    text: "12. O que é uma Rede Neural Artificial, de forma geral?",
    options: [
      "Um tipo de planilha inteligente",
      "Um modelo inspirado no cérebro, composto por camadas de neurônios (unidades) ajustando pesos no treinamento",
      "Um antivírus para Python",
      "Um banco de dados para imagens"
    ],
    correct: 1
  },
  {
    text: "13. Qual biblioteca é citada no plano para implementação de Machine Learning?",
    options: ["React", "Scikit-learn", "Laravel", "Spring Boot"],
    correct: 1
  },
  {
    text: "14. Qual biblioteca/framework é citado no plano para redes neurais (deep learning) em Python?",
    options: ["TensorFlow/Keras", "jQuery", "Bootstrap", "Express.js"],
    correct: 0
  },
  {
    text: "15. Em Processamento de Linguagem Natural (PLN/NLP), qual tarefa é explicitamente citada no plano?",
    options: ["Roteamento de rede", "Análise de sentimentos", "Criptografia de disco", "Particionamento de tabelas"],
    correct: 1
  },
  {
    text: "16. Qual biblioteca é citada no plano para PLN/NLP?",
    options: ["NLTK e spaCy", "NumPy e Pandas", "Axios e Fetch", "Mockito e JUnit"],
    correct: 0
  },
  {
    text: "17. Em Visão Computacional, qual tarefa é explicitamente mencionada no plano?",
    options: ["Detecção de objetos", "Criação de tabelas SQL", "Balanceamento de carga", "Gerenciamento de memória RAM"],
    correct: 0
  },
  {
    text: "18. Qual ferramenta/biblioteca é citada no plano para Visão Computacional e detecção de objetos?",
    options: ["OpenCV e YOLO", "Hibernate e JPA", "Next.js e Tailwind", "RabbitMQ e Kafka"],
    correct: 0
  },
  {
    text: "19. O que significa 'criar modelos personalizados' no contexto do curso?",
    options: [
      "Copiar um modelo pronto sem ajustes",
      "Definir arquitetura/treinamento e ajustar um modelo para um problema específico (dados e objetivos do projeto)",
      "Apenas desenhar diagramas de rede",
      "Trocar a cor da interface do sistema"
    ],
    correct: 1
  },
  {
    text: "20. Qual preocupação/tema é explicitamente listado no conteúdo de IA do curso?",
    options: ["Ética", "Contabilidade", "Legislação trabalhista", "Eletrônica digital"],
    correct: 0
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
