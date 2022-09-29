const pessoas = [ 'Julio','Aparecida','madruga']

let pessoas1 = [ 'Tica','Chico','RIck']

let pessoas2 = [ 'Pedro','Pantoja','Mari']


pessoas1 = pessoas1.concat(pessoas2)
// modo antigo
console.log(pessoas1)

pessoas1 = [ ...pessoas1,...pessoas2]
console.log(pessoas1)

//clonar Objetos

const listaPessoas = ['Gilmar','Marinalva','Nesk','Maria Luiza']

const cloneListaPessoas = {...listaPessoas}
console.log(listaPessoas)
console.log(cloneListaPessoas)
