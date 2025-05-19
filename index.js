//# 1️⃣ Desafio Classificador de nível de Herói
// Herói e XP
let heroi = "Goku";
let xp = 10000;

// Faixas de XP e níveis 
const niveis = [
  { min: 0,     max: 1000,  nivel: "Ferro" },
  { min: 1001,  max: 2000,  nivel: "Bronze" },
  { min: 2001,  max: 5000,  nivel: "Prata" },
  { min: 5001,  max: 7000,  nivel: "Ouro" },
  { min: 7001,  max: 8000,  nivel: "Platina" },
  { min: 8001,  max: 9000,  nivel: "Ascendente" },
  { min: 9001,  max: 10000, nivel: "Imortal" },
  { min: 10001, max: Infinity, nivel: "Radiante" } // Infinity para pegar qualquer valor acima
];

let nivelDoHeroi = "";

// Percorre o vetor para encontrar o nível correspondente
for (let i = 0; i < niveis.length; i++) {
  if (xp >= niveis[i].min && xp <= niveis[i].max) {
    nivelDoHeroi = niveis[i].nivel;
    break; // achou o nível, pode parar o loop
  }
}

// Saída
console.log(`O Herói de nome ${heroi} está no nível de ${nivelDoHeroi}`);
