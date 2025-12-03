// --- 1. CRIAÇÃO DE ARRAYS ---

// Arrays com diferentes tipos de dados
const frutas = ["Maçã", "Banana", "Laranja"];
const numeros = [1, 2, 3, 4, 5];

// Array misto (possível, mas não recomendado)
const misto = [1, "texto", true, null];

// Array Vazio
const vazio = [];

console.log("Array inicial de frutas:", frutas);


// --- 2. ACESSO E MODIFICAÇÃO ---

// Acessar elementos pelo índice (começa em 0)
console.log(frutas[0]);     // "Maçã"
console.log(frutas[2]);     // "Laranja"
console.log(frutas[99]);    // undefined (índice não existe)

// Verificar o tamanho do array com .length
console.log("Tamanho do array:", frutas.length); 

// Alterar um elemento existente
frutas[1] = "Morango";      // Muda "Banana" para "Morango"
console.log("Frutas após alteração:", frutas);


// --- 3. ADICIONAR E REMOVER ELEMENTOS ---

let lista = ["A", "B"];

// .push(): Adiciona elemento no FINAL do array
lista.push("C");
console.log("Após push:", lista); // ["A", "B", "C"]

// .pop(): Remove elemento do FINAL e o retorna
const itemRemovidoFinal = lista.pop();
console.log("Item removido (pop):", itemRemovidoFinal); // "C"
console.log("Lista após pop:", lista); // ["A", "B"]

// Reiniciando lista para exemplos de início
lista = ["B", "C"];

// .unshift(): Adiciona elemento no INÍCIO do array
lista.unshift("A");
console.log("Após unshift:", lista); // ["A", "B", "C"]

// .shift(): Remove elemento do INÍCIO e o retorna
const itemRemovidoInicio = lista.shift();
console.log("Item removido (shift):", itemRemovidoInicio); // "A"
console.log("Lista após shift:", lista); // ["B", "C"]


// --- 4. ALTERAR EM QUALQUER POSIÇÃO (SPLICE) ---

const frutasSplice = ["Maçã", "Banana", "Laranja", "Uva"];

// .splice() para REMOVER: (índice inicial, quantidade a remover)
frutasSplice.splice(2, 1); 
console.log("Após remover Laranja:", frutasSplice); // ["Maçã", "Banana", "Uva"]

// .splice() para ADICIONAR: (índice, 0, novo elemento)
// O '0' indica que não queremos remover nada, apenas inserir
frutasSplice.splice(1, 0, "Manga"); 
console.log("Após adicionar Manga no índice 1:", frutasSplice); // ["Maçã", "Manga", "Banana", "Uva"]


// --- 5. BUSCA EM ARRAYS ---

const numsBusca = [5, 12, 8, 130, 44];

// .indexOf(): Retorna o índice do valor (ou -1 se não encontrar)
const indice = numsBusca.indexOf(8);
console.log("Índice do número 8:", indice); // 2

// .includes(): Retorna true se o valor existe, false se não
const temDoze = numsBusca.includes(12);
console.log("Tem o número 12?", temDoze); // true

// .find(): Retorna o PRIMEIRO elemento que satisfaz a condição (função)
const maiorQueDez = numsBusca.find(n => n > 10);
console.log("Primeiro número maior que 10:", maiorQueDez); // 12


// --- 6. ORDENAÇÃO (SORT E REVERSE) ---

const numsSort = [10, 5, 100, 20];

// .reverse(): Inverte a ordem dos elementos (altera o original)
numsSort.reverse();
console.log("Array invertido:", numsSort); // [20, 100, 5, 10]

// .sort(): Ordena como TEXTO por padrão (Cuidado!)
numsSort.sort();
console.log("Ordenação padrão (texto):", numsSort); // [10, 100, 20, 5] (Incorreto matematicamente)

// .sort() com função de comparação: Forma CORRETA para números
// Se (a - b) for negativo, a vem antes. Se positivo, b vem antes.
numsSort.sort((a, b) => a - b);
console.log("Ordenação numérica correta:", numsSort); // [5, 10, 20, 100]