const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  // Mostrar a lista de contatos
  index(request, response) {
    const contacts = ContactsRepository.findAll();
    response.json(contacts);
  }

  // Mostrar um contato
  show() {

  }

  // Editar um registro
  update() {

  }

  // Deletar um registro
  delete() {

  }
}
// Singleton: Apenas uma instancia da classe.
module.exports = new ContactController();
// Aqui exportamos a classe ContactController, mas como uma instancia.
