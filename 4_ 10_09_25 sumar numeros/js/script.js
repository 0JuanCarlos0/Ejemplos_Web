const numero1=document.getElementById("numero1")
const numero2=document.getElementById("numero2")

const suma=document.getElementById("suma")

function sumar(){
    console.log("*****")
    const n1=parseFloat(numero1.value)
    const n2=parseFloat(numero2.value)

    const r=n1 + n2
    suma.innerHTML=r
}

numero1.addEventListener("change", sumar)
numero2.addEventListener("change", sumar)