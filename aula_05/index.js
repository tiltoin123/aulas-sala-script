const express = require("express");

const app = express();

app.listen(8080, () => {
  console.log("Servidor ativo na porta 8080");
});

app.use(express.json());

const { sql, connect } = require("./data/database");

app.post("/Aluno", async (req, res) => {
    try {
        await connect();

        const {id, nome, idade} = req.body

        const result = await sql.query(`INSERT INTO Aluno (id, nome, idade) VALUES (${id}, '${nome}', ${idade})`)

        res.send("O cadastro foi um sucesso")
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro interno");
    } finally {
        await sql.close();
    }
})

app.get("/todosAlunos", async(req,res)=>{
    try{
        await connect()

        const result = await sql.query("SELECT * from alunos")

        const final = result.recordset.map(({id,nome,idade})=>({
            id,
            nome,
            idade,
        }))

        console.log(result);
    }catch(err){
        console.error(err);
        res.status(500).send("erro no servidor!");
    }finally{
        await sql.close()
    }
})