const express = require('express');
const app = express();
const routes = require('./routes');

require('./config/dbConfig'); // servidor apto para fazer conexão com o banco de dados mongodb

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
app.use(routes)
// Informandp qual porta vai ficar o servidor
app.listen(3345);