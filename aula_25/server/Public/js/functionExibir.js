carregarAulas()
atualizaHora()
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
            inicio:"13:30",
            fim:"17:30",
            turma:"HTC-DDS-16",
            intrutor:"Murilo Caldeira",
            uc:"Desenvolvimento de Sistema",
            ambiente: "LAB-5106"
        },
        {id:2, 
            inicio:"13:30",
            fim:"17:30",
            turma:"HTC-DDS-17",
            intrutor:"Ramom",
            uc:"Log. Programação",
            ambiente: "LAB-5110"
        },
        {id:3, 
            inicio:"13:30",
            fim:"17:30",
            turma:"HTC-DDS-16",
            intrutor:"Mykael",
            uc:"Java",
            ambiente: "LAB-5106"
        },
        {id:4, 
            inicio:"13:30",
            fim:"17:30",
            turma:"HTC-DDS-16",
            intrutor:"Murilo Caldeira",
            uc:"Desenvolvimento de Sistema",
            ambiente: "LAB-5106"
        }
    ]
    const linha = document.getElementById("aulas")
    let elementosTabela = ""
    for(let i =0;i<aulas.length;i++){
        elementosTabela += '<tr>'
        elementosTabela += '<td>' + aulas[i].inicio.toUpperCase()+'</td>'
        elementosTabela += '<td>' + aulas[i].fim.toUpperCase()+'</td>'
        elementosTabela += '<td>' + aulas[i].turma.toUpperCase()+'</td>'
        elementosTabela += '<td>' + aulas[i].intrutor.toUpperCase()+'</td>'
        elementosTabela += '<td>' + aulas[i].uc.toUpperCase()+'</td>'
        elementosTabela += '<td>' + aulas[i].ambiente.toUpperCase()+'</td>'
        elementosTabela += '</tr>'
    }
    linha.innerHTML += elementosTabela

}

function carregarImagens(){
    const lateral = document.getElementById('lateral')

    const imagens = [
        {
        id:1,
        endereco:"https://static.todamateria.com.br/upload/ta/be/tabela-periodica-og.jpg",
        alt: "tabela periodica"
        },
        {
        id:2,
        endereco:"img/img2.jpg",
        alt:"300 vagas cursos"
        },
        {
        id:3,
        endereco:"img/img1.png",
        alt:"cursos gratuitos"
        }
    ] 

    for(let i=0;i<imagens.length;i++){
        let div = document.createElement('div')
        div.className = "imganun"

        let img = document.createElement('img')
        img.src = imagens[i].endereco
        img.alt = imagens[i].alt
      

        div.appendChild(img)
        lateral.appendChild(img)
    }
}

