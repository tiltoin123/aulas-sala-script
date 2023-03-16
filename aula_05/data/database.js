const sql = require("mssql");

const config = {
    user: 'sa',
    password: 'fatec123*',
    server: 'localhost',
    port: 1096,
    database: 'ProgSCRIPT',
    options: { encrypt: false }
}

async function connect() {
    try {
        await sql.connect(config)
        console.log('O banco se conectou!');

    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    sql,
    connect
}