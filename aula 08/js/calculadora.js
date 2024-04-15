var diaData1 = document.getElementById("diaData1")
var mesData1 = document.getElementById("mesData1")
var anoData1 = document.getElementById("anoData1")

var diaData2 = document.getElementById("diaData2")
var mesData2 = document.getElementById("mesData2")
var anoData2 = document.getElementById("anoData2")

var labelResultado = document.getElementById("resultado")
var labelResultado2 = document.getElementById("resultado2")

function calcDiferenca(){
    var d1Dia = diaData1.value
    var d1Mes = mesData1.value - 1
    var d1Ano = anoData1.value
    var data1 = new Date(d1Ano, d1Mes-1, d1Dia)

    var d2Dia = diaData2.value
    var d2Mes = mesData2.value - 1
    var d2Ano = anoData2.value
    var data2 = new Date(d2Ano, d2Mes-1, d2Dia)

    var duracao = data1 - data2
    duracao = duracao /1000/60/60/24
    duracao = Math.abs(duracao)

    labelResultado.innerHTML = duracao + " dias"


    var diferencaAnos = d1Ano - d2Ano;
    var diferencaMeses = d1Mes - d2Mes;
    var diferencaDias = d1Dia - d2Dia;

    diferencaAnos = Math.abs(diferencaAnos)

    if (diferencaDias < 0) {
        diferencaMeses--;
        diferencaDias += new Date(d1Ano, d1Mes, 0).getDate();
    }
    if (diferencaMeses < 0) {
        diferencaAnos--;
        diferencaMeses += 12;
    }

    labelResultado2.innerHTML = diferencaAnos + " anos, " + diferencaMeses + " meses, " + diferencaDias + " dias";
    console.log(diferencaAnos, diferencaMeses, diferencaDias)
}
    