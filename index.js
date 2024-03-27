const perguntas = [
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "console.log()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Compara valores",
        "Compara valores e tipos",
        "Atribui valores",
      ],
      correta: 1
    },
    {
      pergunta: "Qual dos seguintes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "pop()",
        "shift()",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'indexOf()' faz em JavaScript?",
      respostas: [
        "Retorna o último índice de um elemento especificado em um array",
        "Retorna o primeiro índice de um elemento especificado em um array",
        "Retorna um array contendo os índices de todos os elementos especificados",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a sintaxe correta para um comentário de linha única em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Como você declara uma função em JavaScript?",
      respostas: [
        "function minhaFuncao()",
        "myFunction()",
        "declare função minhaFuncao()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "remove()",
        "delete()",
        "pop()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual dos seguintes não é um tipo de dados em JavaScript?",
      respostas: [
        "String",
        "Boolean",
        "Float",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'slice()' faz em JavaScript?",
      respostas: [
        "Remove elementos de um array",
        "Divide uma string em substrings",
        "Retorna uma cópia de parte de um array dentro de um novo array",
      ],
      correta: 2
    },
  ];
  
  // cria o obj quiz dizendo que seu conteúdo é o da div html com id quiz
  const quiz = document.querySelector('#quiz')
  // cria o obj template dizendo que o conteúdo é o da div template html
  const template = document.querySelector('template')
  
  // adiciona valor único ao obj corretas
  const corretas = new Set()
  // cria o obj que usa a prop length para contar a quant de elementos no objeto
  const totalDePerguntas = perguntas.length
  // cria o obj que seleciona o span da div de acertos
  const mostrarTotal = document.querySelector('#acertos span')
  // coleta a quantidades de acertos através do obj corretas e total de perguntas
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição para a quantidade de perguntas (10)
  for(const item of perguntas) {
    // diz para clonar todo o conteúdo de template
    const quizItem = template.content.cloneNode(true)
    // troca o conteúdo de h3 para pergunta
    quizItem.querySelector('h3').textContent = item.pergunta
  
   // loop para a quantidade de respostas (3 + 1 de exemplo)
    for(const resposta of item.respostas) {
      // cria o obj dt que é buscado todas as suas informações de tag html
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      // troca o conteúdo de dt span para resposta
      dt.querySelector('span').textContent = resposta
      // seleciona o input e troca o atributo de name fazendo uma concatenação de valor
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      // troca o atributo de value para a quantidade de itens de resposta
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      // quando ocorrer mudança no input, gera o evento
      dt.querySelector('input').onchange = (event) => {
        // cria obj que verifica se o valor de evento é o mesmo da função
        const estaCorreta = event.target.value == item.correta
        
        //remove valor sempre que clicado no errado
        corretas.delete(item)
        // se for correto, ele adiciona valor
        if(estaCorreta) {
          corretas.add(item)
        }
        // código de coleta mas dentro do loop para carregar na página
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      // coloca as perguntas na tela
      quizItem.querySelector('dl').appendChild(dt)
    }
      
    // remove o primeiro item de exemplo, atráves de busca e dando um remover
    quizItem.querySelector('dl dt').remove()
    
    // coloca o conteúdo total na tela
    quiz.appendChild(quizItem)
  }