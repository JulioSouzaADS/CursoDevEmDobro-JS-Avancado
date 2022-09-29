


let ferverAgua = (chaleiraEstaNoFogao,fogaoEstaLigado)=>{
    return new Promise ((resolve,reject)=>{
        if (chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log ('tudo certo, Começando o processo de ferver agua')
            resolve()
        } else {
            console.log ('e necessario ligar o fogão e colocar a chaleira sobre o fogo para ferver a agua')
            reject()
        }
    }) 
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = false
ferverAgua(chaleiraEstaNoFogao,fogaoEstaLigado)
console.log ('fazendo Café')