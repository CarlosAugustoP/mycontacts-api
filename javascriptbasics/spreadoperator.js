const user = {
  firstname: 'John',
  lastname: 'Doe',
  fullname: 'John Doe',
  age: 30,
  instagram: '@john_doe',
  skills: ['HTML', 'CSS', 'JS'],
  active: false,
};
// um jeito de mudar o elemento de uma classe user
user.active = true;

// não é recomendado, pois quebra o conceito de imutabilidade que é muito importante no react.

Object.assign(user, { active: false });

// spread operator
const updatedUser = {
  ...user,
  // override
  active: true,
  skills: [...user.skills, 'React.js'],
};

console.log(user);
console.log(updatedUser);
