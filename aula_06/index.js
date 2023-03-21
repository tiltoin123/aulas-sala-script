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