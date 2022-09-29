setTimeout(function () {

}, 3000)

setTimeout(() => {

}, 3000);


// setInterval(function(){
//     console.log ('Executando a cada 2S')
// },2000)

let idDoIntervalo = setInterval(() => {
                    console.log('Executando a cada 2S')
}, 2000);

console.log (idDoIntervalo)

clearInterval(idDoIntervalo)
clearTimeout()