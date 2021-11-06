const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');


const app = express();

// require('./config/dbConfig'); // servidor apto para fazer conexão com o banco de dados mongodb

mongoose.connect("mongodb+srv://usuario:usuario@cluster0.xkef2.mongodb.net/annotations?retryWrites=true&w=majority", {
    useNewUrlParser: true,   //essa duas linhas são configurações do mongodb e para evitar uns avisos no terminal
    useUnifiedTopology: true,
})

app.use(express.json());

// Apenas para teste vá em localhost:3345 e veja essas info chegando
// app.get('/', (req, res) => {
//     return res.json({
//         message: "Wilhams",
//         messa: "Wilhas",
//         ma: "Wilhas"
//     })
// })

// Dizendo ao express para usar routes, routes é o arquivos que contém todas 
// as rotas e suas ações como: criação, edição, deleção ou qq outra
app.use(routes);
// Informandp qual porta vai ficar o servidor
app.listen(3333);