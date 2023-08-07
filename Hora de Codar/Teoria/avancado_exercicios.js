// Exercício de Manipulação de Array

// Crie uma lista de compras que é inicialmente vazia.
// Adicione 5 itens à lista usando push().
// Agora, remove o primeiro item da lista usando shift().
// Imprima a lista final no console.

const listaCompras = []
// Adicionando itens a lista de compras \/
listaCompras.push("Banana", "Maracuja", "Mamão", "Pêssego", "Pera");

// Removendo o primeiro item da lista \/
listaCompras.shift()

// Impressão da lista \/
console.log(listaCompras)


// Exercício de Manipulação de Array - find()

// VocÊ tem um array de números: [3, 7, 14, 21, 29, 36, 42]
// Use a função find() para encontrar o primeiro número que é dividido por 7 e maior que 10.

const listaNum = [3, 7, 14, 21, 29, 36, 42];

const numEspecifico = listaNum.find((num) => num > 10 && num % 7 === 0);

console.log(numEspecifico);


// Exercício de Manipulação de Array - Filter()

// Dado o array de números: [5, 10, 15, 20, 25, 30, 35, 40]
// Use a função filter() para criar um novo array que contenha apenas os números que são maiores que 20.

const numeros = [5, 10, 15, 20, 25, 30, 35, 40];

const numMaiores = numeros.filter((num) => num > 20);




// Exercício de Manipulação de String - split(), trim()

// Dada a string: " Bom dia, mundo!".
// Remova os espaços em branco do início e no final da string
// em seguida, divida a string em palavras.

const comprimento = " Bom dia, mundo! ";
const foraEspaco = comprimento.trim().split(" ");
console.log(foraEspaco);


// Exercício de Manipulação de String - startsWith(), endsWith()
// Dada a string: "O rato roeu a roupa do rei de Roma"
// Verificar se a string começa com a palavra "O" e termina com a palavra "Roma".

const ratoString = "O rato roeu a roupa do rei de Roma";
console.log(ratoString.startsWith("O"));
console.log(ratoString.endsWith("Roma"));