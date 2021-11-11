const Anootations = require('../models/AnnotationsData');

module.exports = {

    async update(req, res) {

        // Capturando a id enviada pela url
        const { id } = req.params;

        // Capturando o title e notes do corpo da requisição que foram enviadas pelo front
        const { notes } = req.body;

        // Somente se houver alterações enviadas em notes e title q eu altero algo no banco
        if (notes) {

            // Buscando no DB os dados que pertence ao 'id' enviado
            // _id é o nome do id que o mongodb gera automático, então estou buscando esse _id que seja igual ao id q estou pegando de req.params
            // lembres-se que annotation busca o dado pelo id e dessa forma tem as outrs propriedades como tilte e notes
            var annotation = await Anootations.findOne({ _id: id });

            // Validação para impedir que salve algo no db sem alteração alguma
            if (annotation.notes === notes) {
                return res.json("Voçe não fez nenhuma alteração!");
            }

            // annotation.notes -> estou entrando no DB e setando notes ou seja notes é alteração enviada
            // que o usuário deseja q seja alterada
            annotation.notes = notes;

            // Salvando as alterações
            await annotation.save();

        }

        // retornando a própra "annotation" atualizada
        return !annotation ? res.json("Não há alterações a serem feita!") : res.json("Alteração feita com Sucesso!!!");
    }

}