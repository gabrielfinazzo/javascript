// ES6 + => versçao do javascript
//let e const

let n = 10;
n = 20;


const x = 15;

function testeVar() {
    var x = 1;
    if(true) {
        var x = 2;
        console.log(x);
    }

    console.log(x);
}

testeVar();


function testeLet() {
    let x = 1;
    if(true) {
        let x = 2;
        console.log(x);
    }

    console.log(x);
}

testeLet();

// arrow function

const soma = (a, b) => a + b;

console.log(soma(3, 5));


const quadrado = (numero) => numero * numero;

console.log(quadrado(4));


const cumprimento = (nome) => {
    const mensagem = `Olá, ${nome}!`
    return mensagem
};
console.log(cumprimento("Gabriel"));


// Template literals
const nome2 = "Maria";
const idade = 22;
console.log(`Meu nome é ${nome2} e eu tenho ${idade} anos.`);


// Destructuring -> desestruturação
const pessoa = {nome: "João", idade: 40};
const nome3 = pessoa.nome// Modo antigo de coletar a informação
console.log(nome3)

const pessoa2 = {nome: "Luana", idade: 23};
const {nome: nome4, idade: idade2} = pessoa2;
console.log(nome4)


const numeros = [1, 2, 3, 4];
const [primeiro, segundo, terceiro] = numeros
console.log(primeiro, segundo, terceiro);