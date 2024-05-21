const express = require('express')
const app = express()
const Usuariocontroller = require("./controllers/UsuarioController")
const port = 5000

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

app.post("/logar", Usuariocontroller.logar)