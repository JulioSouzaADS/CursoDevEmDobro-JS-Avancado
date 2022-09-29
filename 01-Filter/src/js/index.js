let pessoas = [
    {nome : 'Julio' , idade : 22},
    {nome : 'Aparecida' , idade : 21},
    {nome : 'Gustavo' , idade : 17}
]


let pessoasComIdade22Anos = pessoas.filter(function(pessoa){
    return pessoa.idade === 22 
})

console.log (pessoasComIdade22Anos)