// Fundamentos

// var nome = "valor"
var minhaVariavel = "Olá, mundo!";

console.log(minhaVariavel);



// variáveis e tipos de dados
var meuNumero = 10;
console.log(meuNumero + 5);

console.log(typeof meuNumero); // typeof serve para identificar o tipo do dado. Nesse caso o dado é numérico.

var booleano = true; // false

console.log(booleano);

var meuObjeto = {};
var meuArray = [];
var meuNull = null;
var meuUndefined = undefined;

console.log(meuObjeto);
console.log(meuArray);
console.log(meuNull);
console.log(meuUndefined);


// let e cont
// novas formas de declarar variáveis

let x = 10; // substitui o var
const y = 5; // variável para declarar uma constante, valor que não muda ao longo do código.

console.log(typeof x)
console.log(x, y);


// Operadores aritméticos
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// Operadores de comparação
console.log(x == y); // igual
console.log(x != y); // diferente

console.log("5" == 5)
console.log("5" === 5) // caracteres de tipos iguais. Nesse caso é falso, pois 5 string é diferente de 5 numérico.
console.log("5" !== 5) // caracteres de tipos diferentes. Nesse caso é verdadeiro.


// Operadores lógicos
// AND &&
// OR ||

console.log(10 > 5 && 20 > 5); // 10 é maior que 5 e 20 é maior que 5. Verdadeiro!
console.log(10 > 5 && 20 < 5); // 10 é maior que 5 e 20 é menor que 5. Falso! 20 não é menor que 5.

console.log(10 > 5 || 20 < 5); // Se um dos dois for verdadeiro o resultado será true. Nesse caso o 10 > 5 é verdadeiro. 


// Conversão de tipos
const meuNumero2 = "123";
const meuNumeroConvertido = Number(meuNumero2);
console.log(meuNumeroConvertido)
console.log(typeof meuNumeroConvertido)


// Estrutura de condição - if, else, else if

const idade = 19;

if (idade <= 13) {
    console.log("Criança");
} else if (idade <= 18) {
    console.log("Adolescente")
} else {
    console.log("Adulto");
}

if (false) {
    console.log("Isso exxecuta");
} else {
    console.log("Isso agora é executado!");
}


// Switch
const fruta = "Banana"

switch(fruta) {
    case "Banana":
        console.log("Banana é a fruta!");
        break
    case "Maçã":
        console.log("Maçã é a fruta!");
        break
    default:
        console.log("Fruta não encontrada");
}



// Estruturas de repetição
//1, 2, 3, 4, 5, 6... => dependendo de uma condição

// contador, condição de limite, incremento
for(let i = 0; i < 5; i = i + 1) {
    console.log("O valor de i é: " + i);
}
//primeiro vem a declaração da variável; em sequÊncia até quando haverá repetições ( i < 5); e por final o valor de i (i = i + 1).
//Em vez de usar i = i + 1, pode ser utilizado i++

// while
let k = 0;

while(k < 5) {
    console.log("O valor de k é: " + k)
    k++;
}

// do while
let j = 0;

do {
    console.log("O valor do j é: " + j);
    j++
} while(j < 5);



// Funções
// function nome(arg1, arg2) { corpo }
function cumprimentar(nome) {
    console.log("Olá!" + nome);
}

cumprimentar("Matheus");// Tem que chamar a função para que o código seja ativado.


// Escopo de variáveis
let cor = "azul";

function mostrarCor() {
    let cor = "Verde";
    console.log(cor);
}

console.log(cor); // Escopo global, esta fora da função

mostrarCor(); // Escopo particular, esta presente somente na função


// hoisting = içamento
testeHoisting(); // É possível usar a função mesmo antes da declaração da mesma, isso ocorre por conta do sistema de içamento (hoisting).

function testeHoisting() {
    console.log("Deu certo!")
}


// arrow function
const testeArrow = () => console.log("Isso também é uma função.")
testeArrow();


// Truthy e falsy
const minhaVariavel1 = "" // falsy
const minhaVariavel2 = "Algum texto" // verdadeiro

if (minhaVariavel1) {
    console.log("É verdadeiro!");
} else {
    console.log("É falso!");
}

if (minhaVariavel2) {
    console.log("É verdadeiro!");
} else {
    console.log("É falso!");
}

// A variável1 é falsa, pois é uma string sem caracter. Já a variável2 é verdadeira, pois é uma string com caracters.



// Array - listas
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

console.log(numeros[0]);

console.log(numeros[2]);

numeros.push(6); // Adiciona mais um número ao array

console.log(numeros);


// prototype => Objeto -> objeto2
// Array => nossos arrays
numeros.pop() // Remove o último número do array

console.log(numeros);


// strings

const minhaStringNova = "Olá, mundo!"

// concatenação
const minhaString3 = minhaStringNova + " Como você está?";

console.log(minhaString3);

// interpolação
const minhaString4 = ` ${minhaStringNova}Como você está?`;

console.log(minhaString4);

console.log(minhaString4.length); // qtd de caracteres
console.log(minhaString4[2]); // trazer o caracter escolhido
console.log(minhaString4.toLocaleUpperCase());


// Data e hora
const agora = Date();
console.log(agora);

const natal = new Date(2023, 11, 25);
console.log(natal);


// Math
console.log(Math.PI);

console.log(Math.round(3.4)); // Arrendondar

console.log(Math.sqrt(16)); // Raiz quadrada

console.log(Math.pow(2, 4)); // potência 2 * 2 * 2 * 2 = 16