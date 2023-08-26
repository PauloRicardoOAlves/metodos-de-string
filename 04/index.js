let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";


identificador = identificador.padStart(6,0)
console.log(identificador)

nome = nome[0].toUpperCase() + nome.slice(1)
console.log(nome)