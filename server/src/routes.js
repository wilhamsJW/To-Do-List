const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');

/**
 * Esse arquivo enxerga todas as rotas e quando tal rota for acionada
 * ele irá enxergar isso e chamará o controller q controla essa rota
 * .create -> é a função q o controller irá executar
 */

routes.get('/annotation', AnnotationController.create);

module.exports = routes;