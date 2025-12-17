# Quiz de Lógica em Java com Controle de Acesso

Este projeto consiste em um sistema de quiz educacional desenvolvido em **HTML**, **CSS** e **JavaScript puro**, voltado para avaliações de **lógica de programação em Java**, com foco em uso acadêmico (aulas, simulados e atividades avaliativas).

O sistema foi projetado para **minimizar fraudes** em avaliações online, aplicando regras rígidas de acesso e comportamento do usuário durante o teste.

---

## Objetivo do Projeto

O objetivo principal é oferecer uma plataforma simples, leve e funcional para aplicação de testes de múltipla escolha, permitindo ao professor:

- Controlar quem pode acessar o teste  
- Garantir que cada aluno realize a prova **apenas uma vez**  
- Invalidar automaticamente o teste em caso de comportamento indevido  
- Exportar os resultados para análise posterior  

---

## Funcionalidades Principais

### Controle de Acesso

- Acesso restrito por **login e senha**  
- Lista de usuários pré-definida no código  
- Cada usuário pode realizar o teste **uma única vez**  
- Tentativas adicionais são automaticamente bloqueadas  

### Sistema Anti-Fraude

O teste é **invalidado automaticamente** (nota zero) caso o aluno:

- Troque de aba do navegador  
- Minimize a janela  
- Perca o foco da página  
- Saia da página durante o teste  

Após a invalidação:

- O usuário é bloqueado permanentemente  
- O teste é marcado como **inválido**  
- A pontuação final é **zero**  

### Avaliação

- Questões de múltipla escolha  
- Feedback visual imediato da resposta correta  
- Cálculo automático da pontuação  
- Resultado final exibido ao término do teste  

### Exportação de Resultados

- Geração de arquivo **JSON** contendo:
  - Login do aluno  
  - Respostas selecionadas  
  - Respostas corretas  
  - Pontuação final  
  - Status do teste (**concluído** ou **inválido**)  

---

## Tecnologias Utilizadas

- **HTML5** — Estrutura da aplicação  
- **CSS3** — Estilização da interface  
- **JavaScript (Vanilla JS)** — Lógica do sistema  
- **LocalStorage** — Persistência de dados no navegador  

> O projeto não utiliza frameworks ou bibliotecas externas.

---

## Como Utilizar

1. Clone ou baixe o repositório  
2. Abra o projeto em um servidor local (ex.: **Live Server**)  
3. Configure os usuários autorizados no arquivo `script.js`  
4. Configure as questões conforme necessário  
5. Publique normalmente (**Vercel**, **GitHub Pages**, etc.)  

O sistema funciona **100% no frontend**, sem necessidade de backend.

---

## Observações Importantes

- Este projeto **não substitui** sistemas oficiais de avaliação  
- O controle anti-fraude é eficaz para **ambientes educacionais**  
- Não é recomendado para **exames de alta criticidade**  
- Usuários avançados podem contornar regras via ferramentas do navegador  

---

## Uso Educacional

Indicado para:

- Avaliações em sala de aula  
- Simulados online  
- Testes de fixação  
- Provas diagnósticas  
- Atividades supervisionadas  

---

## Licença

Este projeto é destinado a **uso educacional** e pode ser adaptado livremente para fins acadêmicos.

---

## Autor

**Instrutor de TI e Programação**  
**Breno Ruiz Dias Figueira**
