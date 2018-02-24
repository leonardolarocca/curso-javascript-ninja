/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let array = [1,2,3,4,5,6,7,8,9,0];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(array) {
  return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(array[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myOtherFunction (array, number) {
  return array[number]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let myOtherArray = [1,'2',true,NaN,undefined]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction(myOtherArray);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book (nomeLivro) {
  let obj = {
    'Código Limpo': {
      quantidadePaginas: 1000,
      autor: 'Unknown',
      editora: 'Unknown'
    },
    'Introdução a Computação': {
      quantidadePaginas: 2500,
      autor: 'Desconhecido',
      editora: 'Edilab'
    },
    'Javascript': {
      quantidadePaginas: 3500,
      autor: 'Joãozinho',
      editora: 'Editora'
    }
  }
  if (!nomeLivro) {
    return obj;
  }
  return obj[nomeLivro]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
let bookname = `Javascript`;
console.log(`O Livro ${bookname} tem  ${book(bookname).quantidadePaginas} páginas`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
let autor = `Joãozinho`;
console.log(`O autor do livro ${bookname} é ${book(bookname).autor}`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
let editora = `Editora`;
console.log(`O livro ${bookname} foi publicado pela editora ${book(bookname).editora}`)
