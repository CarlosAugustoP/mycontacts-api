const express = require('express');

const routes = require('./routes');

const app = express();

/* Middleware: intercepta requisições e pode interromper a requisição ou alterar dados.
Nota-se que o express executa todas as rotas sequencialmente, então se ligue na ordem */
app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
