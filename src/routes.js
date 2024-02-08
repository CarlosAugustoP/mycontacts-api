const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

const router = Router();
router.get(
  '/contacts',
  ContactController.index,
);
router.get('/contacts/:id', ContactController.show);

router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);
router.get('/categories', CategoryController.index);
router.post('/categories', CategoryController.store);
// In express, we can pass how many parameters we want, and give them the names wed like.

module.exports = router;
