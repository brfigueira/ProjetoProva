const questions = [
  {
    text: "1. Em uma tabela, o que normalmente representa uma LINHA (row)?",
    options: ["Um atributo/campo", "Um registro/ocorrência", "Um banco de dados inteiro", "Um índice de performance"],
    correct: 1
  },
  {
    text: "2. Em uma tabela, o que normalmente representa uma COLUNA (column)?",
    options: ["Um registro/ocorrência", "Uma consulta SQL", "Um atributo/campo", "Um arquivo CSV"],
    correct: 2
  },
  {
    text: "3. Qual exemplo abaixo representa melhor um dado CATEGÓRICO?",
    options: ["Preço do produto", "Quantidade vendida", "Categoria do produto", "Desconto em %"],
    correct: 2
  },
  {
    text: "4. Qual exemplo abaixo representa melhor um dado NUMÉRICO para análise (métrica)?",
    options: ["Nome do cliente", "Data de nascimento", "Valor da venda", "Cidade"],
    correct: 2
  },
  {
    text: "5. Se dois relatórios mostram valores diferentes para o mesmo indicador (ex.: faturamento), qual é a melhor primeira ação?",
    options: ["Escolher o maior valor", "Escolher o menor valor", "Verificar definição do indicador e fonte/recorte dos dados", "Ignorar porque é normal divergir"],
    correct: 2
  },
  {
    text: "6. Qual formato é mais comum para troca de dados entre sistemas e planilhas em projetos de dados?",
    options: [".psd", ".csv", ".exe", ".mp3"],
    correct: 1
  },
  {
    text: "7. Em Data Warehouse, o que melhor descreve uma DIMENSÃO?",
    options: ["Tabela com medidas numéricas (valores)", "Tabela que descreve o contexto (ex.: cliente, produto, tempo)", "Tabela usada apenas para backup", "Arquivo de logs do sistema"],
    correct: 1
  },
  {
    text: "8. Em modelagem dimensional, o que melhor descreve um FATO (fact table)?",
    options: ["Tabela com descrições textuais", "Tabela com chaves e medidas (métricas) do processo de negócio", "Tabela que define permissões de acesso", "Tabela temporária de importação"],
    correct: 1
  },
  {
    text: "9. Qual alternativa descreve corretamente um ESQUEMA ESTRELA (star schema)?",
    options: [
      "Fatos no centro ligados diretamente a dimensões",
      "Dimensões no centro ligadas a fatos e a outras dimensões",
      "Somente tabelas normalizadas em 3FN",
      "Somente arquivos não estruturados (JSON, XML)"
    ],
    correct: 0
  },
  {
    text: "10. Qual alternativa descreve corretamente um ESQUEMA FLOCO DE NEVE (snowflake)?",
    options: [
      "Dimensões desnormalizadas com muitos atributos repetidos",
      "Dimensões podem ser normalizadas em subdimensões (hierarquias separadas)",
      "Somente uma tabela única com tudo (wide table)",
      "Apenas dados em planilhas, sem banco"
    ],
    correct: 1
  },
  {
    text: "11. Em DW, GRANULARIDADE significa:",
    options: [
      "O nível de detalhe do dado armazenado (ex.: por item, por pedido, por dia)",
      "A velocidade da internet no laboratório",
      "A quantidade de dimensões existentes",
      "O tipo de índice do banco"
    ],
    correct: 0
  },
  {
    text: "12. Qual medida abaixo é tipicamente ADITIVA (pode ser somada em qualquer dimensão, incluindo tempo)?",
    options: ["Saldo de conta no fim do dia", "Estoque disponível no momento", "Quantidade vendida", "Percentual de conversão"],
    correct: 2
  },
  {
    text: "13. Qual exemplo abaixo é tipicamente SEMI-ADITIVO (geralmente NÃO se soma ao longo do tempo)?",
    options: ["Faturamento total", "Quantidade vendida", "Saldo/estoque em um instante", "Número de pedidos"],
    correct: 2
  },
  {
    text: "14. Qual é o propósito mais direto de um ÍNDICE em banco de dados?",
    options: ["Criptografar os dados", "Acelerar buscas/consultas em colunas", "Aumentar a granularidade", "Substituir o ETL"],
    correct: 1
  },
  {
    text: "15. O que é ETL?",
    options: [
      "Um tipo de gráfico para BI",
      "Um processo de Extração, Transformação e Carga de dados",
      "Uma linguagem de consulta exclusiva de DW",
      "Um método para criar senhas fortes"
    ],
    correct: 1
  },
  {
    text: "16. Qual passo do ETL normalmente envolve padronizar formatos (ex.: datas), tratar nulos e corrigir inconsistências?",
    options: ["Extração", "Transformação", "Carga", "Indexação"],
    correct: 1
  },
  {
    text: "17. Em SQL, qual comando é usado para CONSULTAR dados de uma tabela?",
    options: ["SELECT", "UPDATE", "DELETE", "CREATE"],
    correct: 0
  },
  {
    text: "18. Em SQL, qual cláusula é usada para FILTRAR linhas com base em uma condição?",
    options: ["GROUP BY", "ORDER BY", "WHERE", "FROM"],
    correct: 2
  },
  {
    text: "19. Qual alternativa define melhor um DATA MART?",
    options: [
      "Um DW corporativo completo para toda a empresa",
      "Um subconjunto do DW focado em uma área/assunto (ex.: vendas, financeiro)",
      "Um repositório apenas de arquivos de imagem",
      "Um servidor exclusivo para e-mail"
    ],
    correct: 1
  },
  {
    text: "20. Qual prática está mais relacionada à SEGURANÇA e GOVERNANÇA de dados em DW?",
    options: [
      "Dar acesso total a todos para facilitar",
      "Controlar acesso por perfil e manter definições/linhagem do dado",
      "Evitar documentar para não dar trabalho",
      "Salvar dados somente em planilhas locais"
    ],
    correct: 1
  }
];
