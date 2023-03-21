const express = require("express")
const app = express();
const port = 8080;

app.use(express.json())

const {Pool} = require('pg')

app.listen(port);

require("dotenv").config();

const pool = new Pool({
    connectionString: process.env.ELEPHANTSQL_URL
})