nombre="Nemo"

function saludar(nombre){
    console.log("Hola" + nombre + " con javascrip")
}

saludar(nombre)

const formulario= document.getElementById("formulario")

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const datos=new FormData(formulario)
    console.log(datos.get("nombre"))
    console.log(datos.get("edad"))
})