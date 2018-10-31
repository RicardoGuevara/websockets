let socket = io.connect('/')

socket.on('mensajes',(mensajes)=>{
  console.log(mensajes)
})

function enviarDatos(){
  let mensaje = {
    autor:document.getElementById("autor").value ,
    text:document.getElementById("mensaje").value
  }
  socket.emit('nuevo-mensaje',mensaje)
}
