// Nao podemos ter quebra de linha com aspas simples ou duplas.
console.log('Esta é a uma linha');

// A template string permite quebrar linha.

console.log(`Esta é a primeira linha
Esta é a segunda linha
Esta é a terceira linha
Esta é a quarta linha`);

const username = 'John';

// Podemos concatenar dessa forma, porem, pode ser muito massante escrever isso o tempo todo.
console.log('Hello, ' + username + '!');

// Por isso, podemos interpolar vaiáveis usando template strings.
console.log(`Hello, ${username}!`);
