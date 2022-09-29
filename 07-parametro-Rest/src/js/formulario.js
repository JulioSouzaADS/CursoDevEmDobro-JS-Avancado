
// function(a,b,...args) {

// }

// ...args recebe todos os parametros da função e monta na forma de um array

function incentivarQuester (mensagem, ...nomeQuester) {
    console.log(nomeQuester)
   nomeQuester.map(nomeQuester => console.log (` ${mensagem} ${nomeQuester}`) )
}

incentivarQuester (`Parabens Por ter Chegado Ao Modulo Avançado De JS,`, 'Julio Souza','Rick','Cidinha','Madruga')

// dessa forma deveriamos mudar a variavel todas as veses que tivermos um novo Quester