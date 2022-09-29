let pessoas = [
    {nome : 'Roberto' , idade : 33},
    {nome : 'ricardo' , idade : 33},
    {nome : 'raphael' , idade : 27}
]

// let nomeDasPesoas = []
// for ( let i=0; i < pessoas.length; i++){
//     nomeDasPesoas.push ( pessoas[i].nome)
// }
// //vai  criar um array novo so com os nomes de pessoas
// console.log (pessoasComIdade22Anos)

let nomeDasPesoas = pessoas.map ( function(pessoa){
    return ` ${pessoa.nome} tem ${pessoa.idade} anos de idade` 
})
console.log (nomeDasPesoas)

// let nomeDasPesoas = pessoas.map ( pessoa => `${pessoa.nome} tem ${pessoa.idade} anos de idade`)
// console.log (nomeDasPesoas)