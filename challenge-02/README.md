# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma (num1, num2) {
  return num1 + num2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
let result = soma(2,2) + 5;

// Qual o valor atualizado dessa variável?
9

// Declare uma nova variável, sem valor.
let nova;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addValue () {
  nova = 10;
  return `O valor da variável agora é ${new}`);
}

// Invoque a função criada acima.
addValue();

// Qual o retorno da função? (Use comentários de bloco).
/*O Valor da variável agora é 10*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function foo (param1, param2, param3) {
  if (typeof param1 != "number" || typeof param2 != "number" || typeof param3 != "number") {    
    return `Preencha os dados corretamente!`;
  } else {    
    return (param1 * param2 * param3) + 2;
  }
}

// Invoque a função criada acima, passando só dois números como argumento.
foo(2,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
'Preencha os dados corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
foo (2,2,2)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 10

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function checkArgs (param1, param2, param3) {
  if (param1 !== undefined && param2 == undefined &&  param3 == undefined) {
    return param1;
  } else {
    if (param1 !== undefined && param2 !== undefined &&  param3 == undefined) {
      return param1 + param2;
    } else {
      if (param1 !== undefined && param2 !== undefined &&  param3 !== undefined) {
        return (param1 + param2) / param3;
      } else {
        if (param1 == undefined && param2 == undefined &&  param3 == undefined) {
          return false
        } else {
          return false;
        }
      }
    }
    return null;
  }
    
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
/*
> checkArgs()
false
> checkArgs(1)
1
> checkArgs(1,1)
2
> checkArgs(1,1,2)
1
*/
```
