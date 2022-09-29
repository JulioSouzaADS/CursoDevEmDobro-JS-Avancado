let chaleiraEstaNoFogao = 0
let fogaoEstaLigado = false

let ferverAgua = (chaleiraEstaNoFogao,fogaoEstaLigado)=>{
    return new Promise ((resolve,reject)=>{
        if ( typeof chaleiraEstaNoFogao != 'boolean') throw 'Somente o tipo Booleano e aceito'
        
        if (chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log ('Passo 1 finalizado: agua foi fervida')
            resolve()
        } else {
            let mensagemDeErro = 'e necessario ligar o fogão e colocar a chaleira sobre o fogo para ferver a agua'
            reject(mensagemDeErro)
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
    try {
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
        const cafePassado = await passarCafe(aguaFervida)
        const cafeTomado = await tomarCafe(cafePassado)
        const xicaraLavada = await lavarXicara(cafeTomado)

       throw 'Mensagem De Erro'
       
    } catch (error) {
        console.log (error)
    } finally {
        console.log ('Finalizado o Ritual De Tomar Café, Bora Estudar')
        
    }
}

iniciarProcessoDeFazerCafe()