const Annotations = require('../models/AnnotationsData');

module.exports = {

    // Teste para testar se a conexão com o bacno está ativa, inseridados
    // no banco mongo manualmente e estou pegando eles aqui e testando
    // no insominia
    async read(req, res) {
        const annotationList = await Annotations.find();
        return res.json({annotationList})
    },

    create(req, res) {
        // Essas são info q o fron ou client enviou, pegamos ela por req.body   
        const { title, notes, priority } = req.body;

    }
}