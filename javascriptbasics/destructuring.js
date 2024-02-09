const user = {
  firstname: 'John',
  lastname: 'Doe',
  fullname: 'John Doe',
  age: 30,
  instagram: '@john_doe',
  skills: ['HTML', 'CSS', 'JS'],
};

// stupid way
const firstusername = user.firstname;
const userage = user.age;

console.log(firstusername, userage);

// smart way (destructuring)
// forma de pegar os valores dentro de um objeto e salvar lo dentro de uma variavel propria
const {
  firstname, age, skills, fullname: fullName,
} = user;
console.log(firstname, age, skills);

// destructuring arrays
const [primary, secondary, tertiary, forth] = skills;
console.log(primary, secondary, tertiary, forth);

console.log(fullName);
