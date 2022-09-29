function colocarAguaParaFerver() {
    console.log ('colocar agua para ferver');

   setTimeout(() => {
    console.log ('Agua Ferveu')
    passarOCafe();

   }, 5000);

}

function prepararParaPassarCafe(){
    console.log('pegar o pó de café')
    console.log('pegar o filtro de café')
    console.log(' colocar o café no filtro')
    console.log(' colocar o filtro em cima da garrafa')
}

function passarOCafe(){
    console.log('passando o cafe')
}

colocarAguaParaFerver();
prepararParaPassarCafe();
