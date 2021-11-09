const Annotations = require('../models/AnnotationsData');

module.exports = {

    // Teste para testar se a conexão com o bacno está ativa, inseridados
    // no banco mongo manualmente e estou pegando eles aqui e testando
    // no insominia
    // Ler Registros ou buscar eegistros
    async read(req, res) {
        const annotationList = await Annotations.find();
        return res.json({ annotationList })
    },

    // Inserir registros no db MongoDB
    async create(req, res) {
        // Essas são info q o front ou client enviou, pegamos ela por req.body   
        const { title, notes, priority } = req.body;

        if (!notes || !title) {
            return res.status(400).json({ error: "Necessário um título/anotação" })
        }

        const annotationCreated = await Annotations.create({title, notes, priority})

        return res.json(annotationCreated)

    },

    // Delete
    async delete(req, res) {
        // este é o id que vem na rota mandada pelo front, se pega ele de req.params
        const { id } = req.params;
        // _id é o nome do id que o mongodb gera automático, então estou buscando esse _id que seja igual ao id q estou pegando de req.params
        const annotationDeleted = await Annotations.findOneAndDelete({ _id : id });

        if (annotationDeleted) {
            // return res.json(annotationDeleted)
            return res.json({ message: "Excluído com Sucesso" })
        }

        return res.status(401).json({ error: "Não foi encontrado o registro para deletar!" })
    }
}