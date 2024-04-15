var frase = "\tOlá Pedro o come cu da favela \"CDD\""

var uc = "PROJETO INTEGRADOR III: GRAND PRIX"

var abreviado = uc.charAt(0)                // O primeiro caracter
abreviado = uc.charAt(uc.length - 1)        // Pegando o último elemento
abreviado = uc.substring(0,3)               // Pegando abreviações
abreviado = uc.substring(8,18)              // Pegando Intervaçps
abreviado = uc.substring(18)                // Pegando a partir de determinado ponto
abreviado = uc.slice(3,6)                   // Funciona de forma similae ao substring
abreviado = uc.slice(18)                    // pegando os ultimos 10 caracteres
abreviado = uc.indexOf(" ")                 // Buscando tornos
abreviado = uc.split("")
abreviado = uc.replace("PROJETO", "trabalho")
abreviado = abreviado.toLocaleUpperCase()
abreviado = abreviado.toLocaleLowerCase()

var abreviado2 = uc.slice(-4)
abreviado = uc.substring(0,4)

console.log(abreviado+". "+abreviado2)