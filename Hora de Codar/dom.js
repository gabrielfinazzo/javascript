// DOM - Document Object Model

// Selecionar elementos

const elementoPorId = document.getElementById("meuId");
console.log(elementoPorId);

const elementoPorId2 = document.querySelector("#meuId");
console.log(elementoPorId2);

const elementPorClasse = document.getElementsByClassName("minhaClasse");
console.log(elementPorClasse);

const elementPorClasse2 = document.querySelector(".minhaClasse");
console.log(elementPorClasse2);

// Utilizar sempre querySelector para manter o padrão da página do javaScript.


// Manipular conteúdo de texto
const element = document.querySelector("#meuId");
console.log(element.textContent); // textContent serve para visualizar somente o testo no console.

/* element.textContent = "Mudei de texto"
console.log(element.textContent) */

setTimeout(() => {
    element.textContent = "Mudei de texto";
}, 2000);

// trabalhando com atributos
const link = document.querySelector("a"); // Tem dois "a" no html, porém o js somente irá trazer o primeiro.

console.log(link)

link.setAttribute("href", "https://horadecodar.com.br/cursor");

console.log(link.getAttribute("href")); // Mostrar o link no console

console.log(link.hasAttribute("target")); // Verifica se o objeto de algum atributo, nesse caso o atributo ativo é o "_blank" para abrir o link em outra aba.

link.removeAttribute("target");

// set, get, has, remove / Attribute


// Manipulação de classes do CSS
const elemento = document.querySelector("#meuId");

elemento.classList.add("novaClasse"); // Adiciona um novo estilo css

element.classList.remove("minhaClasse"); // Remove um estilo css

element.classList.toggle("outraClasse"); // Se a classe existe ele remove, se não existe ele adiciona.


// Manipular o CSS
const elemento3 = document.querySelector("#meuId");

elemento3.style.color = "blue"; // Adiciona diretamente um novo estilo
elemento3.style.backgroundColor = "yellow";


// Navegação entre nós
const element4 = document.querySelector("#meuInput");

const pai = element4.parentNode; // parentNode traz o elemento pai do elemento em questão. (#meuInput - Filho) (#meuFormulario - Pai) 
console.log(pai);

// Obter o primeiro filho
const primeiroFilho = pai.firstChild; // Traz o elemento que é o primeiro filho
console.log(primeiroFilho);

const ultimoFilho = pai.lastChild;
console.log(ultimoFilho);


// Manipulação de estrutura do DOM
const novoElemento = document.createElement("div");
console.log(novoElemento);

novoElemento.textContent = "Minha div de JavaScript";
console.log(novoElemento);

document.body.appendChild(novoElemento);
document.body.insertBefore(novoElemento, pai); // appendChil e insertBefore serve para adicionar o elemento na página HTML, para que aparece no site e na posição desejada.

document.body.removeChild(elementoPorId); // Remove o elemento desejado da página html.


// Eventos

// click
const botao = document.querySelector("button");

botao.addEventListener("click", function () {
    console.log("Botão clicado!");
});

// mouse
const elemento5 = document.querySelector("#meuFormulario");

elemento5.addEventListener("mouseover", function() {
    console.log("O mouse passou aqui!");
});

// teclado
const campoInput = document.querySelector("#meuInput");
campoInput.addEventListener("keydown", function() {
    console.log("Tecla pressionada");
});

// formulario
const form = document.querySelector("form");
form.addEventListener("submit", function(event) { 
    event.preventDefault(); // Event serve para previnir que a página não recarregue ao acionar o submit (enviar).
    console.log("Form enviado");
});


// Propagação de eventos
document.querySelector("#elementoPai").addEventListener("click", function() {
    console.log("Click capturado no pai");
}); // O evento ocorre se os elementos filhos forem clicados também. Tomar cuidado para usar somente nos elementos filhos para não acarretar em bug.

document.querySelector("#elementoFilho").addEventListener("click", function(event) {
    //event.stopPropagation(); // Esse evento faz com que o evento click atribuido ao elemento pai não afete mais o elemento filho.

    console.log("Elemento filho");
});

document.querySelector("#meuLink").addEventListener("click", function(event) {
    event.preventDefault(); // Remove o comportamento padrão do elemento que seria redirecionar para o site do google

    console.log("clicou no link!");
});

// delegação de eventos
document.querySelector("#elementoPai").addEventListener("click", function(event) {
    if (event.target.matches(".classeDosFilhos")) {
        console.log("Evento delegado para o filho");
    }
}); // funciona o evento do pai mais o evento do filho ao clicar no elemento filho