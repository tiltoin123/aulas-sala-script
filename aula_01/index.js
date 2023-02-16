const express = require("express")
const app = express();
const port = 8080;

app.listen(port);

app.get('/',  ()=> {
        console.log('deu certo')
  });
let nome = 'batata'
app.get('/testeHTML',(req,res)=>{
  res.send("<h1 style='color:blue;text-align:center;'> tum tum tum tum tum tum tum tum pa</h1>");
  console.log("alguma coisa")
} );