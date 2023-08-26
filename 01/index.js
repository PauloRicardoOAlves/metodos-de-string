const comentario = "Esse Covid é muito perigoso!";

const palavrasMaiuscula = comentario.toUpperCase()
const palavrasSeparadas = palavrasMaiuscula.split(" ")
const filtro = palavrasSeparadas.filter(palavra => palavra == "COVID" || palavra == "PANDEMIA")

if(filtro.length != 0){
    console.log("Comentário bloqueado por conter palavras proibidas")
} else{
    console.log("Comentário autorizado")
}