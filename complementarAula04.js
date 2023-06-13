/*const soma  = function (a, b) {
     return a + b 
    }
const subtrair = function (a, b) {
     return a - b 
    }
    
console.log( soma(15,20) )
console.log( subtrair(15,5) )*/

/*const soma = (a,b) => a + b
const subtrair = (a,b) => a - b

const ICMS = x => x * 0.21
let precoProduto  = 500
let desconto = 50 

let novoPreco = subtrair(soma(precoProduto, ICMS(precoProduto)), desconto) 
console.log(novoPreco)*/

/*NOVOS EXCERCICOS ---------------------------------------------------------------------------------------*/


/*const multiplica = (a, b) => a + b;
const subtrair = (a , b) => a - b;
const valorICMS = x => x * 0.21;
let precoProduto = 1200;
let desconto = 100;

const calcularPrecoFinal = subtrair(multiplica(precoProduto, valorICMS(precoProduto)), desconto);
console.log(calcularPrecoFinal);*/

const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
//const soma = (a ,b) => a + b;

function soma(a, b) {
    return a + b
}

let valorA = 10;
let valorB = 5;
let resultado = dividir(multiplicar(valorA, valorB), soma(valorA, valorB));
console.log(resultado);