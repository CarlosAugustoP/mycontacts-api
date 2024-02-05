const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');

const router = Router();
router.get(
  '/contacts',
  ContactController.index,
);
router.get('/contacts/:id', ContactController.show);

router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);
// In express, we can pass how many parameters we want, and give them the names wed like.

module.exports = router;
