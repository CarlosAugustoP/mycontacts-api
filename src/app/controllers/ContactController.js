const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  // Mostrar a lista de contatos. Utilizar async para callback assincrono.
  async index(request, response) {
    // Sei que é bloqueante, porém execute a função e espere o retorno.
    const contacts = await ContactsRepository.findAll();
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
    console.log('delete');
  }
}
// Singleton: Apenas uma instancia da classe.
module.exports = new ContactController();
// Aqui exportamos a classe ContactController, mas como uma instancia.
