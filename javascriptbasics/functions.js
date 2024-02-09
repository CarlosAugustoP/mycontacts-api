// Word function
// funcoes que criamos com a keyword function tem seu próprio this.
function minhafuncao() {
  // this traduz para 'este' ou 'este objeto'
  // No contexto de chamar o this em uma função, o this refere-se ao valor da função, ou seja, o objeto que a contém. Dentro do javascript, tudo é um objeto.
  // Quando aplicamos um construtor, estamos praticamente dizendo que criamos um objeto.
  this.nome = 'carlos';
}
// normal function has its own arguments
function soma(primeiroParametro, ...argumentos) {
  console.log({ primeiroParametro });
  console.log({ argumentos });
}

soma(1, 3, 4, 5, 6, 7, 8, 'carlos');

// Arrow function does not have its own arguments, gets arguments from the parent scope
const sum = () => {
  console.log(arguments);
};
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
/* toda vez que chamamos uma função com a keyword new, estamos criando um novo objeto. Ela sendo um objeto, conseguimos atribuir propriedadades, ou seja valores para esse objeto

Arrow function. Para criar uma arrow function, precisamos armazenar seu retorno em uma variável ou constante

Arrow functions não tem seu próprio this, elas herdam o this do contexto ou escopo em que foram criadas.

os arrow functions nao tem construtor, ou seja, podemos nunca chamar uma arrow function com new, pois ela não é um objeto.
*/

const minhaArrowFunction = () => {
  // esse this nao estaria dentro da função, mas sim no escopo global do node.
  this.lastnome = 'vasconcelos';
};
const algumNumero = 10;

const helloWorld = () => (algumNumero >= 10
  ? 'Hello World'
  : 'Hello Universe'
);

const getUser = () => ({
  nome: 'Carlos',
  sobrenome: 'Vasconcelos',
});

console.log(helloWorld());
// perceba que aqui, o this nao foi atribuido a nenhum objeto, logo, ele se refere ao escopo global do node. isso ocorre pois as arrow functions nao tem seu proprio this, elas herdam o this do contexto em que foram criadas.
