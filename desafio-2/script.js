// Definir os níveis com base na quantidade de vitórias
// Cada objeto representa um intervalo de vitórias e o respectivo nível
const niveis = [
  { min: 0,   max: 10,  nivel: "Ferro" },
  { min: 11,  max: 20,  nivel: "Bronze" },
  { min: 21,  max: 50,  nivel: "Prata" },
  { min: 51,  max: 80,  nivel: "Ouro" },
  { min: 81,  max: 90,  nivel: "Diamante" },
  { min: 91,  max: 100, nivel: "Lendário" },
  { min: 101, max: Infinity, nivel: "Imortal" } // Infinity permite cobrir qualquer número acima de 101
];

// Declarar a função que calcula o nível do herói com base nas vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
  // Calcula o saldo de vitórias subtraindo derrotas
  const saldoVitorias = vitorias - derrotas;
  
  // Variável para armazenar o nível correspondente
  let nivelDoHeroi = "";

  // Percorre o array de níveis para encontrar em qual faixa o número de vitórias se encaixa
  for (let i = 0; i < niveis.length; i++) {
    if (vitorias >= niveis[i].min && vitorias <= niveis[i].max) {
      nivelDoHeroi = niveis[i].nivel;
      break; // Para o loop assim que encontrar o nível correto
    }
  }

  // Exibe o resultado formatado no console
  console.log(`O Herói tem o saldo de: ${saldoVitorias} e está no nível de: ${nivelDoHeroi}`);
}

// Chamada da função passando 75 vitórias e 20 derrotas como exemplo
calcularNivel(75, 20);

