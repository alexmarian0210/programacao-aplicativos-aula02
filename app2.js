/**
 * ========================================
 * ARQUIVO: atividade.js
 * Atividade Prática: Funções Básicas
 * ========================================
 */

// ----------------------------------------
// 1. CALCULADORA: Funções básicas
// ----------------------------------------

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Erro: Divisão por zero.";
  }
  return a / b;
}


// ----------------------------------------
// 2. VALIDAÇÃO: Idade e Status
// ----------------------------------------

function validarIdade(idade) {
  if (idade < 0) {
    return "Idade inválida.";
  } else if (idade < 18) {
    return "Menor de idade.";
  } else if (idade < 60) {
    return "Adulto(a).";
  } else {
    return "Pessoa idosa.";
  }
}


// ----------------------------------------
// 3. TABUADA: Imprimir a tabuada de um número
// ----------------------------------------

function imprimirTabuada(numero) {
  console.log(`\n--- Tabuada de ${numero} ---`);
  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
  console.log("---------------------------\n");
}


// ----------------------------------------
// 4. PAR OU ÍMPAR: Contar pares em um array
// ----------------------------------------

function contarPares(arrayDeNumeros) {
  let contador = 0;

  for (let i = 0; i < arrayDeNumeros.length; i++) {
    const numero = arrayDeNumeros[i];
    // Se o resto da divisão por 2 for 0, o número é par
    if (numero % 2 === 0) {
      contador++;
    }
  }

  return contador;
}

// ========================================
// TESTES E CHAMADAS DAS FUNÇÕES
// ========================================

console.log("=========================================");
console.log("🚀 Resultados das Funções");
console.log("=========================================");

// --- Teste 1: Calculadora ---
console.log("1. CALCULADORA:");
console.log(`\tSoma (10 + 5):\t\t ${somar(10, 5)}`);
console.log(`\tSubtração (10 - 5):\t ${subtrair(10, 5)}`);
console.log(`\tMultiplicação (10 * 5):\t ${multiplicar(10, 5)}`);
console.log(`\tDivisão (10 / 5):\t ${dividir(10, 5)}`);
console.log(`\tDivisão por 0:\t\t ${dividir(10, 0)}`);

console.log("\n-----------------------------------------");

// --- Teste 2: Validação de Idade ---
console.log("2. VALIDAÇÃO DE IDADE:");
console.log(`\tIdade 15: ${validarIdade(15)}`);
console.log(`\tIdade 30: ${validarIdade(30)}`);
console.log(`\tIdade 65: ${validarIdade(65)}`);

console.log("\n-----------------------------------------");

// --- Teste 3: Tabuada ---
console.log("3. TABUADA (Imprimindo tabuada de 4):");
imprimirTabuada(4);

console.log("\n-----------------------------------------");

// --- Teste 4: Contar Pares ---
const numeros = [1, 2, 5, 8, 10, 13, 20, 22];
const paresEncontrados = contarPares(numeros);
console.log("4. PAR OU ÍMPAR (Contagem no Array):");
console.log(`\tArray analisado: [${numeros.join(', ')}]`);
console.log(`\tTotal de números pares: ${paresEncontrados}`);

console.log("=========================================");