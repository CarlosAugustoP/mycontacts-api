const { v4 } = require('uuid');

const db = require('../../database');

let contacts = [
  {
    // Considered safer due to unpredictable nature of uuid
    id: v4(),
    name: 'Mateus',
    email: 'mateus@mail.com',
    phone: '123456789',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Jose',
    email: 'jose@mail.com',
    phone: '123456789',
    category_id: v4(),
  },

];

class ContactsRepository {
  async findAll(orderBy = 'ASC') {
    // SELECT operator is used to return all rows from a table
    // ORDER BY is used to sort the result set in ascending or descending order
    let direction;
    if (orderBy.toUpperCase() === 'DESC') {
      direction = 'DESC';
    } else {
      direction = 'ASC';
    }
    const rows = await db.query(`SELECT * FROM contacts ORDER BY name ${direction}`);
    return rows;
  }

  async findById(id) {
    // Parametrized queries avoid SQL injections ny separating sql code from user input
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return row;
  }

  async findByEmail(email) {
    // Parametrized queries avoid SQL injections ny separating sql code from user input
    const [row] = await db.query('SELECT * FROM contacts WHERE email = $1', [email]);
    return row;
  }

  // async sempre retorna uma promise
  async create({
    name,
    email,
    phone,
    category_id,
  }) {
    // Parametrized queries avoid SQL injections ny separating sql code from user input
    const [row] = await db.query(
      `INSERT INTO contacts(name, email, phone, category_id)
        VALUES($1, $2, $3, $4)
        RETURNING *`,
      [name, email, phone, category_id],
    );
    return row;
  }

  async update(id, {
    name, email, phone, category_id,
  }) {
    const row = await db.query('UPDATE contacts SET name = $1, email = $2, phone = $3, category_id = $4 WHERE id = $5 RETURNING *', [name, email, phone, category_id, id]);
    return row;
  }

  delete(id) {
    return new Promise((resolve) => {
      // manter somente os contatos com uuid id diferente do id selecionado
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}
// Using singleton pattern
module.exports = new ContactsRepository();
