const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    
    // Obtener valores de los inputs
    const primerNumero = parseFloat(document.getElementById("primerNumero").value);
    const segundoNumero = parseFloat(document.getElementById("segundoNumero").value);
    
    // Validar que los valores sean números
    if (isNaN(primerNumero) || isNaN(segundoNumero)) {
        alert("Por favor, ingresa números válidos en ambos campos.");
        return;
    }
    
    // Calcular resultado
    const resultado = primerNumero * segundoNumero;
    
    // Mostrar resultado en la página
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.textContent = `Resultado: ${resultado}`;
    
    // Mostrar resultado en consola
    console.log(`Resultado: ${primerNumero} × ${segundoNumero} = ${resultado}`);
});