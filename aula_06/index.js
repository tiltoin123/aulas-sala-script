const express = require("express")
const app = express();
const port = 8080;
const {Pool} = require('pg')


app.use(express.json())
app.listen(port,()=>{
    console.log('servidor está ativo na porta:',port)
});

require("dotenv").config();

const pool = new Pool({
    connectionString: process.env.ELEPHANTSQL_URL
})

app.get("/getAlunos",(req,res)=>{
    pool.query("select * from Aluno",(err,result)=>{
        if(err){
            res.status(500).send("Erro ao encontrar Alunos")
        }else{
            res.send(result.rows)
            console.table(result.rows)
        }
    })
})

app.post("/createAlunos",(req,res)=>{
    pool.query(`insert into Aluno(id,nome,email)values(1,'totototototonha da lua','reidacacimbinha@algumacoisa.com')`,(err,result)=>{
        if(err){
            console.error(err)
            res.status(500).send("não inseriu")
        }else{
            res.send(result.rows)
            console.table(result.rows)
        }
    })
})

app.post("/alteraAlunos",(req,res)=>{
    pool.query(`update Aluno set nome ='edmar agua rala' where id=2`,(err,result)=>{
        if(err){
            console.error(err)
            res.status(500).send("não alterou")
        }else{
            res.send(result.rows)
            console.table(result.rows)
        }
    })
})

app.post("/deletaAlunos",(req,res)=>{
    pool.query(`delete from Aluno where id=1`,(err,result)=>{
        if(err){
            console.error(err)
            res.status(500).send("não deletou")
        }else{
            res.send(result.rows)
            console.table(result.rows)
        }
    })
})