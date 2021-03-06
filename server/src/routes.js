const express = require('express');

// Controllers
const AnnotationController = require('./controllers/AnnotationController');
const PriorityController = require('./controllers/PriorityController');
const ContentController = require('./controllers/ContentController');

const routes = express.Router();

/**
 * Esse arquivo enxerga todas as rotas e quando tal rota for acionada
 * ele irá enxergar isso e chamará o controller q controla essa rota
 * .create -> é a função q o controller irá executar
 */

 routes.use(express.json()); //preciso fazer isso pq o express não lê em JSON, então preciso falar pra ele
 //lê em JSON, é como que isso fosse plugin, algo pra ajudar o express a entender o JSON

routes.post('/annotation', AnnotationController.create);
routes.get('/annotation', AnnotationController.read);
routes.delete('/annotation/:id', AnnotationController.delete);

// Route priority
routes.get('/priority', PriorityController.read);
routes.post('/priority/:id', PriorityController.update);

// Route Content
routes.put('/contents/:id', ContentController.update);

module.exports = routes;