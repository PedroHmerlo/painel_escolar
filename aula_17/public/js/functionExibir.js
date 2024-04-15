atualizaHora()
carregarAulas()
carregarImagens()

function atualizaHora(){
const relogio = document.getElementById("relogio")
const hoje = new Date()

let h = hoje.getHours()
let m = hoje.getMinutes()
let s = hoje.getSeconds()

h = verificaTempo(h)
m = verificaTempo(m)
s = verificaTempo(s)

relogio.innerHTML = h+":"+m+":"+s  

setTimeout(atualizaHora, 1000)
}

function verificaTempo(t){
    if(t < 10){
        t = "0" + t
    }
    return t
}

const fase = new Date()
let hora = fase.getHours()
let fases

if(hora >= 18){
    fases = "Boa Noite"
}else if(hora >=12){
    fases = "Boa Tarde"
}else if(hora >= 6) {
    fases = "Bom Dia"
}else{
    fases = "Boa Madrugada"
}

console.log(fases)


const saudacao = document.getElementById("saudacao")
const hoje = new Date()

let dia = hoje.getDay()


dia = verificaDia(dia)


function verificaDia(d){
    if(d == 0){
        d = "Domingo"
    }else if(d == 1){
        d = "Segunda-Feira"
    }else if(d == 2){
        d = "Terça-Feira"
    }else if(d == 3){
        d = "Quarta-Feira"
    }else if(d == 4){
        d = "Quinta-Feira"
    }else if (d == 5){
        d = "Sexta-Feira"
    }else if(d == 6){
        d = "Sábado"
    }
    return d
}

saudacao.innerHTML = dia+" - "+fases

function carregarAulas(){
    const aulas = [
        {id:1,
            inicio:"13:00",
            fim:"17:00",
            turma:"HTC-DDS-3-16",
            instrutor:"Pedro Henrique",
            uc:"Desenvolvimento de sistemas",
            ambiente:"LAB-5106"
        },
        
        {id:2,
            inicio:"13:00",
            fim:"17:00",
            turma:"HTC-DDS-2-17",
            instrutor:"Ramon Nascimento",
            uc:"Desenvolvimento de sistemas",
            ambiente:"LAB-5106"
        },
        {id:3,
            inicio:"13:00",
            fim:"17:00",
            turma:"HTC-DDS-1-17",
            instrutor:"Mauricio label",
            uc:"Desenvolvimento de sistemas",
            ambiente:"LAB-5106"
        }
    ]

    const tabelaAulas = document.getElementById('tabelaAulas')
    let elementosTabela = ""
    for(let i = 0; i < aulas.length;i++){
        elementosTabela += '<tr>'
        elementosTabela += '<td>' + aulas[i].inicio.toUpperCase(0) + '</td>'
        elementosTabela += '<td>' + aulas[i].fim.toUpperCase(0) + '</td>'
        elementosTabela += '<td>' + aulas[i].turma.toUpperCase(0) + '</td>'
        elementosTabela += '<td>' + aulas[i].instrutor.toUpperCase(0) + '</td>'
        elementosTabela += '<td>' + aulas[i].uc.toUpperCase(0) + '</td>'
        elementosTabela += '<td>' + aulas[i].ambiente.toUpperCase(0) + '</td>'
        elementosTabela += '</tr>'
    }
    tabelaAulas.innerHTML += elementosTabela

}

function carregarImagens(){
    const lateral = document.getElementById('lateral')
    
    const imagens = [
        {
            id:1,
            endereco:"img/02.jpg",
            alt:"300 vagas de curso"
        },
        {
            id:2,
            endereco:"img/01.png",
            alt:"cursos gratuitos"
        }
    ]

    for(let i = 0; i < imagens.length; i++){
        let div = document.createElement('img')
        div.className = "imganun"
        let img = document.createElement('img')
        img.src = imagens[i].endereco
        img.alt = imagens[i].alt
        div.appendChild(img)
        lateral.appendChild(img) 
    }
}