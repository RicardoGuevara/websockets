const express = require("express")
const app = express()
const server = require("http").Server(app)
const io = require('socket.io')(server)

app.use(express.static('html'))

server.listen(3000,()=>{
  console.log("servidor iniciado")
})

let mensajes = [
                {autor: "Jesus",text:"Hola, cómo estás?"},
                {autor: "David",text:"Bien, y tú?"}
               ]

io.on('connection',(socket)=>{
  console.log("Cliente conectado!")
  socket.emit('mensajes',mensajes)

  socket.on('nuevo-mensaje',(mensaje)=>{
    mensajes.push(mensaje)
    io.sockets.emit('mensajes',mensajes)
  })
})
