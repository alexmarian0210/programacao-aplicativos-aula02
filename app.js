/**
 * REVISÃO DE JAVASCRIPT: FUNDAMENTOS MODERNOS (ES6+)
 * TÉC. DESENVOLVIMENTO DE SISTEMAS - SENAI SC
 *
 * REGRA DE OURO: Sempre prefira 'const'. Use 'let' apenas quando necessário. NUNCA use 'var'. [cite: 44, 45]
 */

// ====================================================================
// ## 1. VARIÁVEIS - const, let, var (EVITAR)
// ====================================================================

// const: Variável de escopo de bloco que NÃO pode ser reatribuída. É a opção preferida. [cite: 42, 43, 45, 58]
const nome = "Alex";
const cidade = "Pomerode";
const profissao = "Desenvolvedor";
const empresa = "Tech Solutions";
const habilidades = ["JavaScript", "Node.js", "React", "CSS"]; // Array, cujo *valor* da referência não muda.

// let: Variável de escopo de bloco que PODE ser reatribuída (mudar de valor). [cite: 42, 43, 45, 55]
let idade = 22;      // A idade muda a cada ano.
let salario = 5000.00; // O salário pode mudar.
let experiencia = 3;   // A experiência muda com o tempo.

// var: (EVITAR) Variável antiga com escopo de função, que pode levar a erros inesperados. [cite: 42, 43, 45, 52]
// var PI = 3.14159; // Exemplo de 'var' - Evite!

console.log("--- 1. Variáveis e Informações Pessoais ---");
console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Cidade: " + cidade);
console.log("Profissão: " + profissao);
console.log("Empresa: " + empresa);
// Usando toFixed(2) para formatar o número do salário como moeda.
console.log("Salário: R$ " + salario.toFixed(2));
console.log("Experiência: " + experiencia + " anos");
console.log("Habilidades: " + habilidades.join(", "));


// ====================================================================
// ## 2. DIFERENÇAS DE ESCOPO (Bloco vs. Função)
// ====================================================================

console.log("\n--- 2. Escopo ---");

// Escopo de 'var' (EVITAR): Vazamento fora do bloco 'if'. [cite: 53]
if (true) {
    var y = 20;
}
// O 'var' vaza para fora do bloco.
console.log("Valor de y (usando var - EVITE!): " + y);

// Escopo de 'let' (CORRETO): Variável limitada ao bloco 'if'. [cite: 56]
if (true) {
    let z = 30;
    console.log("Valor de z DENTRO do bloco (usando let): " + z);
}
/*
// Exemplo Errado (ReferenceError):
// console.log("Valor de z FORA do bloco: " + z); // Se descomentar, causa: ReferenceError: z is not defined [cite: 64]
*/


// ====================================================================
// ## 3. IMUTABILIDADE DE const
// ====================================================================

console.log("\n--- 3. const e Imutabilidade ---");

// 'const' impede reatribuição, mas permite modificar o conteúdo de objetos/arrays. [cite: 68]
const pessoa = { nome: "Alex" };

// CORRETO: Modificar a propriedade do objeto é permitido. [cite: 71, 73]
pessoa.nome = "João";
console.log("Objeto após modificação (CORRETO!):", pessoa);

/*
// Exemplo Errado (TypeError): Reatribuir a constante é proibido. [cite: 74, 75]
// pessoa = {}; // Se descomentar, causa: TypeError: Assignment to constant variable.
*/


// ====================================================================
// ## 4. TIPOS DE DADOS E typeof
// ====================================================================

console.log("\n--- 4. Tipos de Dados Primitivos ---");
console.log(`Tipo de 'nome' ("João"): ${typeof "João"}`); // "string" [cite: 79, 86]
console.log(`Tipo de 'idade' (25): ${typeof 25}`);     // "number" [cite: 81]
console.log(`Tipo de 'true': ${typeof true}`);         // "boolean" [cite: 82]

// typeof para as variáveis do início
console.log(`Tipo da variável 'nome': ${typeof nome}`); // string
console.log(`Tipo da variável 'idade': ${typeof idade}`); // number
console.log(`Tipo da variável 'salario': ${typeof salario}`); // number
console.log(`Tipo da variável 'habilidades': ${typeof habilidades}`); // object (Arrays são objetos em JS)


// ====================================================================
// ## 5. CONVERSÃO DE TIPOS
// ====================================================================

console.log("\n--- 5. Conversão de Tipos ---");

// COERÇÃO DE TIPO IMPLÍCITA (CUIDADO! EVITAR!) [cite: 90]
console.log(`"5" + 2 (String + Number): ${"5" + 2}`); // Resultado: "52" (Coerção para string) [cite: 91, 92]
console.log(`"5" - 2 (String - Number): ${"5" - 2}`); // Resultado: 3 (Coerção para number) [cite: 93, 94]

// CONVERSÃO EXPLÍCITA (CORRETO!) [cite: 95]
const numeroConvertido = Number("42");
const stringConvertida = String(123);
const booleanoConvertido = Boolean(1);

console.log(`Number("42"): ${numeroConvertido} (Tipo: ${typeof numeroConvertido})`); // 42, number [cite: 96]
console.log(`String(123): ${stringConvertida} (Tipo: ${typeof stringConvertida})`); // "123", string [cite: 97]
console.log(`Boolean(1): ${booleanoConvertido} (Tipo: ${typeof booleanoConvertido})`); // true, boolean [cite: 98]


// ====================================================================
// ## 6. OPERADORES ARITMÉTICOS
// ====================================================================

console.log("\n--- 6. Operadores Aritméticos ---");
const a = 10;
const b = 5;

const soma = a + b;
const subtracao = a - b;
const multiplicacao = a * b;
const divisao = a / b;
const modulo = a % 3; // Resto da divisão (10 % 3 = 1) [cite: 104, 105]
const exponenciacao = 2 ** 3; // Exponenciação (2 elevado a 3 = 8) [cite: 106, 107]

console.log("Soma (10 + 5): " + soma);
console.log("Subtração (10 - 5): " + subtracao);
console.log("Multiplicação (10 * 5): " + multiplicacao);
console.log("Divisão (10 / 5): " + divisao);
console.log("Módulo (10 % 3): " + modulo);
console.log("Exponenciação (2 ** 3): " + exponenciacao);


// ====================================================================
// ## 7. OPERADORES DE COMPARAÇÃO (USE SEMPRE O ESTRITO ===)
// ====================================================================

console.log("\n--- 7. Operadores de Comparação ---");

// Exemplo Incorreto/Desaconselhado (Coerção de Tipo)
// O operador '==' compara apenas o valor e ignora o tipo, resultando em 'true' (EVITE!). [cite: 109, 110]
console.log(`5 == "5" (NÃO ESTRITO - EVITE!): ${5 == "5"}`);

// Exemplo Correto (Comparação Estrita)
// O operador '===' compara o valor E o tipo, resultando em 'false' (CORRETO!). [cite: 108, 112, 113]
console.log(`5 === "5" (ESTRITO - CORRETO!): ${5 === "5"}`);