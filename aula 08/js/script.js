//Objetos Math
var resultado;

resultado = Math.pow(2,53)          // pow = elevado
resultado = Math.round(0.6)         // round = arredondar
resultado = Math.floor(0.5)         // floor = arredonda pra baixo
resultado = Math. ceil(0.6)         // ceil = arredonda para cima
resultado = Math.abs(-5)            // abs = retorna o valor positivo
resultado = Math.max(99,55,8,12)    // max = retorna o maior valor
resultado = Math.min(99,55,114)     // min = retorna o menor valor
resultado = Math.PI                 // PI = retorna o valor de PI
resultado = Math.sqrt(3)            // sqrt = Raiz quadrada

console.log(resultado)

// Data e Hora
var antes = new Date (2005, 8, 17)                  // O 17° dia do 9° mês de 2005
var depois = new Date(2005, 8, 17, 15,10,30 )       // Mesmo dia, às 15:10:30 da tarde
var agora = new Date()                              // Pega a data e hora de agora
var duracao = depois - antes                        // pega a duração em milisegundos
duracao = duracao / 1000/60/60                      // milisegundos -> segundos -> minuto -> hora

var elemento
elemento = depois.getFullYear()                    //pegando o ano
elemento = depois.getMonth()                       //pegando o mês
elemento = depois.getDay()                         //pegando o dia da semana começando em 0
elemento = depois.getDate()                        //pegando o dia do mês
elemento = depois.getHours()                       //pegando a hora
elemento = depois.getUTCHours()                    //pegando hora no formato UTC (+3 usando o de brasilia)          
elemento = depois.toString()                       //Exibindo como String
elemento = depois.toLocaleDateString()             //Data padrão 

console.log(elemento)                   