var peso = document.getElementById("peso")
var altura = document.getElementById("altura")
var labelResultado = document.getElementById("Resultado")
var labelsit = document.getElementById("situacao")

var resultado = null;
var sit = null

function imc(){
    peso = parseFloat(peso.value)
    altura = parseFloat(altura.value)
    resultado = peso/(altura*altura)

    if(resultado < 18.5){
        sit = "magreza"
    }else if(resultado >= 18.5 & resultado < 24.9){
        sit = "Normal"
    }else if(resultado >= 25.0 & resultado < 29.9){
        sit = "SobrePeso"
    }else if(resultado >= 30.0 & resultado < 39.9){
        sit = "Obesidade"
    }else if(resultado >= 40.0){
        sit = "Obesidade Grave"
    }

    labelResultado.innerHTML = resultado
    labelsit.innerHTML = sit
    console.log(resultado)
    console.log(sit)

}