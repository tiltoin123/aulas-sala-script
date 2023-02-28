const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.listen(8080,()=>{console.log("o serviço ta na porta 8080");})
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.send("<h1>Bem vindo</h1>")
})

app.post('/postHTML',(req,res)=>{
    const {nome} = req.body;

    console.log(`olá ${nome}`);
})