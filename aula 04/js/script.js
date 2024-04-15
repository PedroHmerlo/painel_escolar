var inputN1 = document.getElementById("n1")
var inputN2 = document.getElementById("n2")
var labelResultado = document.getElementById("Resultado")

var resultado = null;

function somar(){
    n1 = parseFloat(inputN1.value)
    n2 = parseFloat(inputN2.value)
    resultado = n1 + n2
    labelResultado.innerHTML = resultado
    console.log(resultado)
}

function subtrair(){
    n1 = parseFloat(inputN1.value)
    n2 = parseFloat(inputN2.value)
    resultado = n1 - n2
    labelResultado.innerHTML = resultado
    console.log(resultado)
}

function multiplicar(){
    n1 = parseFloat(inputN1.value)
    n2 = parseFloat(inputN2.value)
    resultado = n1 * n2
    labelResultado.innerHTML = resultado
    console.log(resultado)
}

function dividir(){
    n1 = parseFloat(inputN1.value)
    n2 = parseFloat(inputN2.value)
    resultado = n1 / n2
    labelResultado.innerHTML = resultado
    console.log(resultado)
}

