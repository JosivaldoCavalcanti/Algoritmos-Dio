// Função para calcular o saldo de vitórias e determinar o nível
function classificarJogador(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Classificação do jogador
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de uso
let vitorias = 85; // Substitua pelo número de vitórias do jogador
let derrotas = 30; // Substitua pelo número de derrotas do jogador

console.log(classificarJogador(vitorias, derrotas));
