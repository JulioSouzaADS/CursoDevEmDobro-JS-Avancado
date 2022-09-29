let pessoa = { nome: ' Julio', sobrenome : 'Souza' , idade : 22}
let nome = pessoa.nome
let idade = pessoa.idade

console.log ( nome)
console.log ( idade)

// desestruturacao de um objeto
// let pessoa = { nome: ' Julio', sobrenome : 'Souza' , idade : 22}
// let { nome : nome, idade :idade } = pessoa

const numeros = [ 1,2,3]
const [um,dois,tres] = numeros

console.log (um)