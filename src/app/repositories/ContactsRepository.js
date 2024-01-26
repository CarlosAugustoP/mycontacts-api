const { uuid } = require('uuidv4');

const contacts = [
  {
    // Considered safer due to unpredictable nature of uuid
    id: uuid(),
    name: 'Mateus',
    email: 'mateus@mail.com',
    phone: '123456789',
    category_id: uuid(),
  },

];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}
// Using singleton pattern
module.exports = new ContactsRepository();
