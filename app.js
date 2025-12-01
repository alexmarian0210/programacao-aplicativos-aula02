var nome = "Alex";
var idade = 22;
var cidade = "Pomerode";
var profissao = "Desenvolvedor";
var empresa = "Tech Solutions";
var salario = 5000.00;
var experiencia = 3; 
var habilidades = ["JavaScript", "Node.js", "React", "CSS"];

console.log("Nome: " + nome);
console.log("Idade: " + idade);
console.log("Cidade: " + cidade);  
console.log("Profissão: " + profissao);
console.log("Empresa: " + empresa);
console.log("Salário: R$ " + salario.toFixed(2));
console.log("Experiência: " + experiencia + " anos");
console.log("Habilidades: " + habilidades.join(", "));

if (true){
   var y = 20;
}
console.log("Valor de y: " + y);    





//certo 
const pessoa = {nome :"ALex"}
pessoa.nome = "João"
console.log(pessoa);

/*errado 
pessoa {}

*/
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof salario);
console.log(typeof habilidades);
console.log(typeof experiencia);
console.log(typeof profissao);
console.log(typeof empresa);
console.log(typeof cidade);
console.log(typeof y);


