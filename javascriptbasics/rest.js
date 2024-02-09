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

// smart way (destructuring)
// forma de pegar os valores dentro de um objeto e salvar lo dentro de uma variavel propria
const { firstname, skills, ...resto } = user;
const [primary, ...restoSkills] = skills;

console.log(resto);
console.log(`também entende de ${restoSkills}`);
