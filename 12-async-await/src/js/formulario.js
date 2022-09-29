let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

let ferverAgua = (chaleiraEstaNoFogao,fogaoEstaLigado)=>{
    return new Promise ((resolve,reject)=>{
        if (chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log ('Passo 1 finalizado: agua foi fervida')
            resolve()
        } else {
            console.log ('e necessario ligar o fogão e colocar a chaleira sobre o fogo para ferver a agua')
            reject()
        }
    }) 
}


let passarCafe = (aguaFervida) => {

    return new Promise((resolve) => {
        console.log ('Passo 2 finalizado: café foi passado ')
        resolve (true)
    });
}

let tomarCafe = (cafeTassado) => {
    return new Promise((resolve) => {
        console.log('Passo 3 finalizado: Terminei de Tomar o Café')
        resolve (true)
    });
}

let lavarXicara = (cafeTomado) => {
    return new Promise((resolve) => {
        console.log('Passo 4 finalizado: terminei de lavar a Xicara')
        resolve (true)
    });
}


async function iniciarProcessoDeFazerCafe() {
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    const cafePassado = await passarCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaraLavada = await lavarXicara(cafeTomado)
    if (xicaraLavada) console.log ('Finalizado o Ritual De Tomar Café, Bora Estudar')
}

iniciarProcessoDeFazerCafe()