// Avançando em JavaScript


// Manipulação de arrays
const frutas = ["Maçã", "Laranja"];
frutas.push("Morango"); // Adiciona um novo valor no final do array
console.log(frutas);

frutas.unshift("Acerola"); // Adiciona um novo valor no início do array
console.log(frutas);

frutas.shift(); // Remove o primeiro valor do array
console.log(frutas)

frutas.pop(); // Remove a último valor do array
console.log(frutas);

// map, filter, reduce -> arrow function
const numeros = [1, 2, 3, 4, 5, 6];

// find => retorna o primeiro elemento do critério
const numeroPar = numeros.find((num) => num % 2 === 0); // find busca somente o primeiro número par presente no array

console.log(numeroPar);

const numerosPares = numeros.filter((num) => num % 2 === 0); // filter busca todos os números pares no array
console.log(numerosPares)


// Manipulação de strings
const frase = " Olá, mundo! ";

const palavras = frase.trim().split(" "); // Trim remove os espaços iniciais e finais de uma string

console.log(frase);
console.log(palavras);

const frase2 = "JavaScript é incrível!";
console.log(frase2.startsWith("Java")); // O comando startsWith da true ou false se o pedaço destacado for o mesmo que o do início da string
console.log(frase2.startsWith("cript")); // False, cript é diferente do começo da string ("Java").
// Tem diferença entre letras maiúsculas e minúsculas.

console.log(frase2.endsWith("!")); // True se o trecho destacado for o mesmo que o final da string.

console.log(frase2.endsWith("crível")); // False, pois faltou o ponto de interrogação que seria o final


// Exceções e tratamentos de erros
/* const idade = 15;

if (idade < 18) {
    throw new Error("Você deve ter pelo menos 18 anos");
} */


// Tratar o erro:

try {
    const idade = 15;

    if (idade < 18) {
        throw new Error("Você deve ter pelo menos 18 anos");
    }
    // algum codio

} catch (error) {
    console.log(error.message); // .message remove o informativo de erro e mostra para o usuário somente o informativo do erro (Você deve ter ...)
}

console.log("Continuando o programa...");

// Try catch serve para que um erro não encerre um programa somente gerando um alerta


// Callback => função que será executada por outra função
/* function cumprimentar(nome, callback) {
    console.log("Olá, " + nome);
    callback();
}

function mostrarSaudacao() {
    console.log("Como você está?");
}

cumprimentar("Matheus", mostrarSaudacao);

cumprimentar("Maria", function () {
    console.log("Tá tudo bem?");
})

// settimimeout => dps um tempo executa algo, uma vez
function mostrarMensagem() {
    console.log("Essa mensagem será exibida após 3 segundos.")
}


// 1000ms = 1s
setTimeout(mostrarMensagem, 3000);

setTimeout(function () {
    console.log("oi");
}, 1000);
 */

// Promises -> promessas
const promessa = new Promise((resolve, reject) => {

    const condicao = true;

    if(condicao) {
        resolve("A condição é verdadeira");
    } else {
        reject("A condição é falsa!")
    }

});

promessa.then((mensagem) => { // Catch erro faz com que a mensagem do reject sejá mostrada quando a const condicao for falsa. Sem isso a mensagem do reject não iria ser mostrada.
    console.log(mensagem);
}).catch((erro) => {
    console.log(erro);
});

// Promessas são muito utilizadas para fazer requisição a servidores.

// Bibliotecas feitas que são "promisse based"

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2500, "testando");
});

Promise.all([promise1, promise2]).then((valores) => console.log(valores));


// Async Await -> Tem o mesmo o objetivo da promessa e é mais simples
// Async Await é uma abordagem mais parecida com funções
async function obterValor() {

    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Valor obtido"), 2000);
    });

    const valor = await promessa;

    console.log(valor);

};

obterValor();

async function obterValorComErro() {
   try {
    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => reject("Valor com erro"), 2000);
    });

    const valor = await promessa;

    console.log(valor);
   } catch (error) {
    console.log(error);
   }
};

obterValorComErro();


// JSON (JavaScript Object Notation)
// {nome: "teste"} => {"nome": "teste"}
// Padroniza a comunicação
// froent-end e back-end em uma linguagem só

const objeto = {nome: "João", idade: 30};
const jsonString = JSON.stringify(objeto);

console.log(jsonString);
console.log(typeof jsonString);

// JSON é utilizado para comunicar com o servidor



// \/ Utilizado para puxar informações json do servidor, é preciso converter as informações para que sejam transformadas em objetos e poderem ser usadas no javascript.
const json = '{"nome": "João", "idade":30}';

const objeto2 = JSON.parse(json); // Converter json para objeto
console.log(objeto2)

