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
