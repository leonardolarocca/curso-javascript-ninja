/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/
(() => {
  /*
  Crie um objeto chamado `person`, com as propriedades:
  `name`: String
  `lastname`: String
  `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
  let person = {
    name: `Leonardo`,
    lastname: `Larocca`,
    age: 22
  };
  console.log(`Propriedades de "person":` );

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log(Object.keys(person));

  /*
  Crie um array vazio chamado `books`.
  */
 let books = [];

  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  books.push({ name: `Código Limpo`, pages: 100 });
  books.push({ name: `Algoritmos`, pages: 300 });
  books.push({ name: `Javascript`, pages: 250 });

  console.log( `Lista de livros: ` );

  /*
  Mostre no console todos os livros.
  */
  console.log(`Books: ${JSON.stringify(books, null, ' ')}`);

  /*
  Remova o último livro, e mostre-o no console.
  */
  console.log( `Livro que está sendo removido: ${JSON.stringify(books.pop())}` );


  /*
  Mostre no console os livros restantes.
  */
 console.log( `Agora sobraram somente os livros: ${JSON.stringify((books), null, ' ')}` );

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  // ?
  let new_books = JSON.stringify(books);

  /*
  Mostre os livros nesse formato no console:
  */
  console.log( `Livros em formato string: ${new_books}` );

  /*
  Converta os livros novamente para objeto.
  */
  let obj_books = JSON.parse(new_books)
  console.log( '\nAgora os livros são objetos novamente: ', obj_books );

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
  "[PROPRIEDADE]: [VALOR]"
  */
  for (var i = 0; i < books.length; i++) {
    for (var prop in books[i]) {
      console.log(prop + ': '+ books[i][prop]);
    }
  }

  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  let myName = [`L`, `e`, `o`, `n`, `a`, `r`, `d`, `o`]

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log(`Meu nome é: `,myName.join(''))
  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log( `Meu nome invertido é: `,myName.reverse().join('') );
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log( `Agora em ordem alfabética: `, myName.sort().join('') );
})();
