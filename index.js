/*function saudacao () {
    console.log ("Olá, estudantes")
}

saudacao();

let nomeInserido = prompt("Inserir nome")
alert ("O nome Inserido é " + nomeInserido)*/

/*function solicitarNome(){
    let nomeInserido = prompt ("Inserir nome")
    console.log("O nome Inserido é: " + nomeInserido)
}

solicitarNome();
solicitarNome();
solicitarNome();
solicitarNome();*/

/*function comParametros(parametro1, parametro2){
    console.log(parametro1 + " " +parametro2)
}

comParametros("Olá", "Coder");*/

/*function somar(primeiroNumero, segundoNumero) {
    return primeiroNumero + segundoNumero;
}

let resultado = somar(6, 8);

console.log(somar(primeiroNumero + segundoNumero));*/

function calculadora (primeiroNumero, segundoNumero, operacao){
    switch(operacao){
        case "+":
        return primeiroNumero + segundoNumero;
        break;
        case "+":
        return primeiroNumero + segundoNumero;
        break;
        case "+":
        return primeiroNumero + segundoNumero;
        break;
        case "+":
        return primeiroNumero + segundoNumero;
        break;
        default:
            return "Por favor informe o tipo de operacao;"
    }
}

console.log(calculadora(34, 54, "+"))
console.log(calculadora(43,535, "+"))
console.log(calculadora(36, 5, "+"))
console.log(calculadora(32, 7, "+"))
