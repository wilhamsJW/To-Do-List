const Annotations = require('../models/AnnotationsData');

module.exports = {
    // retorna todos os parãmetros os priorities true ou false mas estamos querendo o true
    async read(req, res) {

        const priority = req.query;
        // Buscque onde priority for igual a priority, dessa forma eu não trago todos os registros e sim só o que a busca manda
        const priorityNotes = await Annotations.find(priority);

        return res.json(priorityNotes);

    },
    // Criado para setar a flag priority para true e false para haver uma mudança no front
    // poderia se fazer isso de outra forma sem um request mas é como é um porjeto academico
    // estou fazendo assim, até pq tem flags reais q precisam dessa lógica tbm
    async update(req, res) {

        const { id } = req.params;
        // _id é o nome do id que o mongodb gera automático, então estou buscando esse _id que seja igual ao id q estou pegando de req.params
        const annotation = await Annotations.findOne({ _id : id });

        // annotation.priority -> estou colando assim pq me retorna todo o objeto com title e notes
        // mas quero só o priority
        if (annotation.priority) annotation.priority = false;
        else annotation.priority = true;
        // Salva a alteração no DB
        await annotation.save();

        return res.json(annotation);

    }

}