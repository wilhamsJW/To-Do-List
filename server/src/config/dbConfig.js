const mongoose = require('mongoose');

// const dbCongig = "mongodb+srv://usuario:usuario@cluster0.xkef2.mongodb.net/annotations?retryWrites=true&w=majority"
const dbCongig = "mongodb+srv://usuario:usuario@cluster0.xkef2.mongodb.net/annotations?retryWrites=true&w=majority"

// Responsável por conectar o backend com o mongodb
const connection = mongoose.connect(dbCongig, {
    // userNewUrlParser: true, // essas duas flags são apenas para evitar alguns avisos
    // useUnifiedTopology: true

    useNewUrlParser: true, useUnifiedTopology: true
    
});

// Conexão pronta pra ser exportada e usada
module.exports = connection;
