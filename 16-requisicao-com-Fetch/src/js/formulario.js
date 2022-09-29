document.getElementById('tirar-carta').addEventListener('click', ()=>{
    tirarUmaCartaAleatoriaDoBaralho()
}) 


async function criarBaralhoEmbaralhado () {
    const url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
    const resposta = await fetch(url)
    return json = await resposta.json() // retorno o objeto definido dentro da api
    
}   

criarBaralhoEmbaralhado()

async function tirarUmaCarta(deck_id){
    const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const resposta = await fetch(url)
    return await resposta.json()

}

async function tirarUmaCartaAleatoriaDoBaralho(){
    const baralho = await criarBaralhoEmbaralhado()
    const carta = await tirarUmaCarta(baralho.deck_id)
    // console.log(carta.cards[0].image)
    const imagemCarta = window.document.getElementById ('carta').src =carta.cards[0].image
}

tirarUmaCartaAleatoriaDoBaralho()
/* nesta função const carta = await tirarUmaCarta(baralho.deck_id) consigo definir o parametro 
para a função acima que esta usando async function tirarUmaCarta(deck_id) desta forma ele consegue localizar
o ID que esta sendo chamado em const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`*/
