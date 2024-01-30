const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  // Mostrar a lista de contatos. Utilizar async para callback assincrono.
  async index(request, response) {
    // Sei que é bloqueante, porém execute a função e espere o retorno.
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  // Mostrar um contato
  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    // 404: not found
    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }
    response.json(contact);
  }

  async store(request, response) {
    const {
      name, email, phone, category_id,
    } = request.body;
    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists) {
      return response.status(400).json({ error: 'This email is already in use' });
    }
    const contact = await ContactsRepository.create({
      name,
      email,
      phone,
      category_id,
    });

    response.json(contact);
  }

  // Editar um registro
  update() {

  }

  // Deletar um registro
  async delete(request, response) {
    console.log('delete');
    const { id } = request.params;
    const contact = ContactsRepository.findById(id);
    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }
    await ContactsRepository.delete(id);
    // 204: no content. Deu certo, mas não tem nada para retornar.
    response.sendStatus(204);
  }
}
// Singleton: Apenas uma instancia da classe.
module.exports = new ContactController();
// Aqui exportamos a classe ContactController, mas como uma instancia.
