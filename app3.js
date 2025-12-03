// exercicios-aula03.js
// Atividades Práticas - Aula 03: Arrays e Objetos

const produtos = [
  { id: 1, nome: "Notebook Dell", preco: 3500, categoria: "eletrônicos", estoque: 5, desconto: 0 },
  { id: 2, nome: "Mouse Logitech", preco: 80, categoria: "eletrônicos", estoque: 15, desconto: 10 },
  { id: 3, nome: "Teclado Mecânico", preco: 350, categoria: "eletrônicos", estoque: 0, desconto: 0 },
  { id: 4, nome: "Cadeira Gamer", preco: 1200, categoria: "móveis", estoque: 8, desconto: 15 },
  { id: 5, nome: "Mesa para Computador", preco: 650, categoria: "móveis", estoque: 3, desconto: 0 },
  { id: 6, nome: "Monitor LG 24\"", preco: 800, categoria: "eletrônicos", estoque: 10, desconto: 5 },
  { id: 7, nome: "Webcam Full HD", preco: 250, categoria: "eletrônicos", estoque: 0, desconto: 0 },
  { id: 8, nome: "Headset Gamer", preco: 180, categoria: "eletrônicos", estoque: 12, desconto: 20 },
  { id: 9, nome: "SSD 480GB", preco: 280, categoria: "eletrônicos", estoque: 20, desconto: 0 },
  { id: 10, nome: "Estante para Livros", preco: 420, categoria: "móveis", estoque: 5, desconto: 10 }
];

// EXERCÍCIO 1: FILTRAR PRODUTOS POR CATEGORIA
const filtrarPorCategoria = (produtos, categoria) => {
  return produtos.filter(produto => produto.categoria === categoria);
};

// Testes:
console.log("=== EXERCÍCIO 1 ===");
const eletronicos = filtrarPorCategoria(produtos, "eletrônicos");
console.log(`Eletrônicos encontrados: ${eletronicos.length}`);
console.log(eletronicos.map(p => p.nome));


// EXERCÍCIO 2: PRODUTOS EM ESTOQUE
const produtosDisponiveis = (produtos) => {
  return produtos.filter(produto => produto.estoque > 0);
};

// Testes:
console.log("\n=== EXERCÍCIO 2 ===");
const disponiveis = produtosDisponiveis(produtos);
console.log(`Produtos disponíveis: ${disponiveis.length}`);
console.log("Produtos em falta:");
const emFalta = produtos.filter(p => p.estoque === 0);
console.log(emFalta.map(p => p.nome));


// EXERCÍCIO 3: CALCULAR VALOR TOTAL DO ESTOQUE
const valorTotalEstoque = (produtos) => {
  return produtos.reduce((total, produto) => {
    return total + (produto.preco * produto.estoque);
  }, 0);
};

// Testes:
console.log("\n=== EXERCÍCIO 3 ===");
const total = valorTotalEstoque(produtos);
console.log(`Valor total do estoque: R$ ${total.toFixed(2)}`);


// EXERCÍCIO 4: APLICAR DESCONTO
const aplicarDescontos = (produtos) => {
  return produtos.map(produto => {
    const precoFinal = produto.preco - (produto.preco * produto.desconto / 100);
    return { ...produto, precoFinal: Number(precoFinal.toFixed(2)) };
  });
};

// Testes:
console.log("\n=== EXERCÍCIO 4 ===");
const comDescontos = aplicarDescontos(produtos);
console.log("Produtos com desconto:");
comDescontos
  .filter(p => p.desconto > 0)
  .forEach(p => {
    console.log(`${p.nome}: R$ ${p.preco} → R$ ${p.precoFinal.toFixed(2)} (${p.desconto}% off)`);
  });


// EXERCÍCIO 5: ENCONTRAR PRODUTO MAIS CARO
const produtoMaisCaro = (produtos) => {
  return produtos.reduce((maior, atual) => {
    return atual.preco > maior.preco ? atual : maior;
  });
};

// Testes:
console.log("\n=== EXERCÍCIO 5 ===");
const maisCaro = produtoMaisCaro(produtos);
console.log(`Produto mais caro: ${maisCaro.nome} - R$ ${maisCaro.preco}`);


// EXERCÍCIO 6: LISTAR NOMES DOS PRODUTOS
const listarNomes = (produtos) => {
  return produtos.map(produto => produto.nome);
};

// Testes:
console.log("\n=== EXERCÍCIO 6 ===");
const nomes = listarNomes(produtos);
console.log("Lista de produtos:");
nomes.forEach((nome, i) => console.log(`${i + 1}. ${nome}`));


// EXERCÍCIO 7: PRODUTOS CAROS EM ESTOQUE
const produtosCarosDisponiveis = (produtos) => {
  return produtos.filter(produto => produto.preco > 300 && produto.estoque > 0);
};

// Testes:
console.log("\n=== EXERCÍCIO 7 ===");
const carosDisponiveis = produtosCarosDisponiveis(produtos);
console.log(`Produtos acima de R$ 300 em estoque: ${carosDisponiveis.length}`);
console.log(carosDisponiveis.map(p => `${p.nome} (R$ ${p.preco})`));


// EXERCÍCIO 8: MÉDIA DE PREÇOS POR CATEGORIA
const mediaPrecoPorCategoria = (produtos) => {
  const categorias = [...new Set(produtos.map(p => p.categoria))];
  
  return categorias.reduce((obj, categoria) => {
    const prods = produtos.filter(p => p.categoria === categoria);
    const soma = prods.reduce((acc, p) => acc + p.preco, 0);
    obj[categoria] = Number((soma / prods.length).toFixed(2));
    return obj;
  }, {});
};

// Testes:
console.log("\n=== EXERCÍCIO 8 ===");
const medias = mediaPrecoPorCategoria(produtos);
Object.entries(medias).forEach(([categoria, media]) => {
  console.log(`Preço médio - ${categoria}: R$ ${media.toFixed(2)}`);
});


// EXERCÍCIO 9: TOP 3 PRODUTOS MAIS CAROS
const top3MaisCaros = (produtos) => {
  return [...produtos]
    .sort((a, b) => b.preco - a.preco)
    .slice(0, 3);
};

// Testes:
console.log("\n=== EXERCÍCIO 9 ===");
const top3 = top3MaisCaros(produtos);
console.log("Top 3 produtos mais caros:");
top3.forEach((p, i) => {
  console.log(`${i + 1}º - ${p.nome}: R$ ${p.preco}`);
});


// EXERCÍCIO 10: ESTATÍSTICAS DO ESTOQUE (DESAFIO)
const estatisticasEstoque = (produtos) => {
  const comDesconto = aplicarDescontos(produtos);
  const valorTotal = valorTotalEstoque(produtos);
  const precoMedio = produtos.length > 0 ? produtos.reduce((s, p) => s + p.preco, 0) / produtos.length : 0;

  const maisCaro = produtoMaisCaro(produtos);
  const maisBarato = produtos.reduce((menor, atual) => 
    atual.preco < menor.preco ? atual : menor
  );

  const categorias = [...new Set(produtos.map(p => p.categoria))];

  return {
    totalProdutos: produtos.length,
    totalEmEstoque: produtos.filter(p => p.estoque > 0).length,
    totalEmFalta: produtos.filter(p => p.estoque === 0).length,
    valorTotal,
    precoMedio: Number(precoMedio.toFixed(2)),
    produtoMaisCaro: maisCaro,
    produtoMaisBarato: maisBarato,
    categorias
  };
};

// Testes:
console.log("\n=== EXERCÍCIO 10 (DESAFIO) ===");
const stats = estatisticasEstoque(produtos);
console.log("Estatísticas do Estoque:");
console.log(`Total de produtos: ${stats.totalProdutos}`);
console.log(`Produtos em estoque: ${stats.totalEmEstoque}`);
console.log(`Produtos em falta: ${stats.totalEmFalta}`);
console.log(`Valor total: R$ ${stats.valorTotal.toFixed(2)}`);
console.log(`Preço médio: R$ ${stats.precoMedio.toFixed(2)}`);
console.log(`Mais caro: ${stats.produtoMaisCaro.nome} (R$ ${stats.produtoMaisCaro.preco})`);
console.log(`Mais barato: ${stats.produtoMaisBarato.nome} (R$ ${stats.produtoMaisBarato.preco})`);
console.log(`Categorias: ${stats.categorias.join(", ")}`);


// EXERCÍCIO 11: BUSCAR PRODUTO POR NOME (BÔNUS)
const buscarProduto = (produtos, termo) => {
  const termoLower = termo.toLowerCase();
  return produtos.filter(produto => 
    produto.nome.toLowerCase().includes(termoLower)
  );
};

// Testes:
console.log("\n=== EXERCÍCIO 11 (BÔNUS) ===");
console.log("Buscar 'gamer':");
console.log(buscarProduto(produtos, "gamer").map(p => p.nome));

console.log("\nBuscar 'monitor':");
console.log(buscarProduto(produtos, "monitor").map(p => p.nome));


// EXERCÍCIO 12: AGRUPAR POR CATEGORIA (BÔNUS)
const agruparPorCategoria = (produtos) => {
  return produtos.reduce((acc, produto) => {
    const cat = produto.categoria;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(produto);
    return acc;
  }, {});
};

// Testes:
console.log("\n=== EXERCÍCIO 12 (BÔNUS) ===");
const agrupados = agruparPorCategoria(produtos);
Object.entries(agrupados).forEach(([categoria, prods]) => {
  console.log(`\n${categoria.toUpperCase()} (${prods.length} produtos):`);
  prods.forEach(p => console.log(`  - ${p.nome}`));
});


// DESAFIO EXTRA: SISTEMA DE CARRINHO DE COMPRAS
const carrinho = {
  itens: [],

  adicionar(produto, quantidade = 1) {
    if (produto.estoque < quantidade) {
      console.log(`Estoque insuficiente para ${produto.nome}`);
      return;
    }
    
    const itemExistente = this.itens.find(item => item.produto.id === produto.id);
    if (itemExistente) {
      itemExistente.quantidade += quantidade;
    } else {
      this.itens.push({ produto, quantidade });
    }
    console.log(`${quantidade}x ${produto.nome} adicionado(s) ao carrinho`);
  },

  remover(produtoId) {
    const indice = this.itens.findIndex(item => item.produto.id === produtoId);
    if (indice === -1) {
      console.log("Produto não encontrado no carrinho");
      return;
    }
    const removido = this.itens.splice(indice, 1)[0];
    console.log(`${removido.produto.nome} removido do carrinho`);
  },

  calcularTotal() {
    return this.itens.reduce((total, item) => {
      const precoComDesconto = item.produto.preco - (item.produto.preco * item.produto.desconto / 100);
      return total + (precoComDesconto * item.quantidade);
    }, 0);
  },

  listarItens() {
    if (this.itens.length === 0) {
      console.log("Carrinho vazio");
      return;
    }
    console.log("\n=== ITENS NO CARRINHO ===");
    this.itens.forEach(item => {
      const precoFinal = item.produto.precoFinal || 
        (item.produto.preco - (item.produto.preco * item.produto.desconto / 100));
      console.log(`${item.quantidade}x ${item.produto.nome} - R$ ${precoFinal.toFixed(2)} cada`);
    });
    console.log(`TOTAL: R$ ${this.calcularTotal().toFixed(2)}`);
  },

  limpar() {
    this.itens = [];
    console.log("Carrinho limpo!");
  }
};

// Testando o carrinho
console.log("\n=== TESTANDO O CARRINHO ===");
carrinho.adicionar(produtos[0], 1); // Notebook Dell
carrinho.adicionar(produtos[3], 2); // Cadeira Gamer
carrinho.adicionar(produtos[7], 1); // Headset Gamer
carrinho.listarItens();
carrinho.remover(4);
carrinho.listarItens();
carrinho.limpar();
carrinho.listarItens();

console.log("\nTodos os exercícios foram concluídos com sucesso!");