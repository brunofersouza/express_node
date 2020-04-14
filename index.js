const express = require('express')

//const bodyParse = require('body-parse')
const bodyParser = require('body-parser')

const userRoute = require('./routes/userRoute')
const app = express ()



const port = 3000

//app.use(bodyParse.urlencaded({extended:false}))
app.use(bodyParser.urlencoded({ extended: false }))
userRoute(app)

app.get('/',(req,res)=>res.send("OLA MUNDO PELO EXPRESS"))

//app.listen(port,() => console.log("Api rodando na porta ${port}"))
  app.listen(port, () => console.log(`Express rodando na porta ${port}`)) 


//  node
//node_express : Primeiros passos com Node.js Criando Rotas, Get ,Post, Put ,Delete


/* const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/