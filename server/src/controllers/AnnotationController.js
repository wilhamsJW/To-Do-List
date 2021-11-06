const Annotations = require('../models/AnnotationsData');

module.exports = {

    create(req, res) {
        // Essas são info q o fron ou client enviou, pegamos ela por req.body   
        const { title, notes, priority } = req.body;

        console.log('xxxxxxxxx', title, notes, priority);
        // return res.json({
        //     message: "Wilhams",
        //     messa: "Wilhas",
        //     ma: "Wilhas"
        // });

    }
}