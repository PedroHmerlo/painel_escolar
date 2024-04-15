var ant = 0
var num = 1
var resultado = 0

for(var i = 0; i< 10; i++){
    resultado = ant + num
    ant = num
    num = resultado
    console.log(resultado)
}
