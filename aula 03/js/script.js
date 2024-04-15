function soma(n1,n2){
    return n1
}

console.log(soma(5,7))

function fatorial(numb){
    var total = 1
    for (i = numb; i>1; i--){
        total = total * i
    }
    return total
}

console.log(fatorial(5))

var x       //declaração de variavel
x = 0       //Atribuição de variavel
x           // x vale 0


let nome = "pedro"

console.log(nome)

var book = {
    topico: "JavaScript",
    avaliativo: true,
}

console.log(book.topico)
console.log(book["avaliativo"])

book.autor = "daddy"

console.log(book["autor"])

book.assuntos = {}

var primos = [2, 3, 5, 7]

console.log(primos[primos.length-1])

primos[4] = 9

console.log(primos[primos.length-1])

var empty = []
console.log(empty.length)

var cordenadas = [
    {x:0, y:0},
    {x:1, y:1}
]

var data = {
    trial1:[[1,2],[3,4]],
    trial2:[[2,3],[4,5]]
}