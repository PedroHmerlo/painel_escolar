const express = require('express')
const app = express()
const port = 5000
const Usuariocontroller = require("./controllers/UsuarioController")
const CategoriaContoller = require('./controllers/CategoriaContoller')
const Parafusocontroller = require("./controllers/ParafusoController")

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get("/usuarios", Usuariocontroller.read)
app.post("/usuarios", Usuariocontroller.create)
app.put("/usuarios/:id_usuario", Usuariocontroller.update)
app.delete("/usuarios/:id_usuario", Usuariocontroller.delete)

app.post("/categoria", CategoriaContoller.create)
app.get("/categoria", CategoriaContoller.read)
app.put("/categoria/:id_categoria", CategoriaContoller.update)
app.delete("/categoria/:id_categoria", CategoriaContoller.delete)

app.post("/parafuso", Parafusocontroller.create)
app.get("/parafuso", Parafusocontroller.read)
app.put("/parafuso/:id_parafuso", Parafusocontroller.update)
app.delete("/parafuso/:id_parafuso", Parafusocontroller.delete)

app.post("/logar", Usuariocontroller.logar)