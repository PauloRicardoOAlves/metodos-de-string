const cpf = "12345678900";
const cnpj = "12345678000199";

if (cpf.length == 11) {
    const cpfFormatado = cpf.substring(0, 3) + "." + cpf.substring(3, 6) + "." + cpf.substring(6, 9) + "-" + cpf.substring(9)
    console.log(cpfFormatado)
} else {
    console.log("CPF inválido")
}

if (cnpj.length == 14) {
    cnpjFormatado = cnpj.substring(0, 2) + "." + cnpj.substring(2, 5) + "." + cnpj.substring(5, 8) + "/" + cnpj.substring(8, 12) + "-" + cnpj.substring(12)
    console.log(cnpjFormatado)
} else{
    console.log("CNPJ inválido")
}
