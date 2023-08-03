// Exercícios de fundamentos
// Exercício 1: Olá, Mundo!
//Crie um script que imprima "Olá, Mundo!" no console

console.log("Olá, Mundo!");


// Exercício 2: Conversão de tipos
// Dado o valor de uma string "1234", converta-o em um número e exiba o tipo da variável no console.

const stringConverter = "1234";
const number = Number(stringConverter);
console.log(number);
console.log(typeof number);


// Exercício 3: Manipulação de strings
// Dado uma string "JavaScript é incrível", escreva um código que conte quantos caracteres a string tem e quantas palavras existem na frase.

const newString = "JavaScript é incrível".toLowerCase()
console.log(newString)
const newStringWords = newString.split(" "); // Split separa cada caracter em um arrey
console.log("Ao todo são " + newString.length + " caracteres e " + newStringWords.length + " palavras presentes nessa string.")


// Exercício 4: Loops e Arrays
// Crie um array com cinco nomes. Use um loop for para imprimir cada nome no console.

const nomes = ["Gabriel", "João", "Maria", "Clara", "Rodolfo"]
const nomesQuantidade = nomes.length

for (let i = 0; i < nomesQuantidade; i++) {
    console.log(nomes[i])
}


// Exercício 5: Funções, Strings e Math
//Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo, "14:30"). A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, "2:30PM").
// Use o objeto Math para auxiliar nesta conversão. Certifique-se de que sua função lida corretamente com horários na meia-noite e no meio-dia.

/* const hora = "18:30";
const horaQuant = hora.split(":");
const horaNum = Number(horaQuant[0] + "." + horaQuant[1]);
 */
function converterHora (horario24) {
    const [hora, minuto] = horario24.split(":");
    const hora12 = hora % 12 || 12;
    let periodo = "AM";

    if (hora > 12) {
        periodo = "PM"
    }
    
    console.log(`${hora12}:${minuto} ${periodo}`)
}

converterHora("24:16")

