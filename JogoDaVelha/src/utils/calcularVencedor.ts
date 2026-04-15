import { Tabuleiro, ResultadoVencedor } from '../types';

/**
 * Calcula o vencedor do jogo da velha.
 *
 * Verifica todas as combinações possíveis de vitória:
 * - 3 linhas horizontais
 * - 3 colunas verticais
 * - 2 diagonais
 *
 * @param casas - Array com os 9 valores do tabuleiro
 * @returns Objeto com o vencedor ('X' | 'O' | null) e a linha vencedora
 */
export function calcularVencedor(casas: Tabuleiro): ResultadoVencedor {
  // Todas as combinações possíveis de vitória (índices do array de casas)
  const combinacoesVitoria: number[][] = [
    [0, 1, 2], // Linha superior
    [3, 4, 5], // Linha do meio
    [6, 7, 8], // Linha inferior
    [0, 3, 6], // Coluna esquerda
    [1, 4, 7], // Coluna do meio
    [2, 5, 8], // Coluna direita
    [0, 4, 8], // Diagonal principal (↘)
    [2, 4, 6], // Diagonal secundária (↙)
  ];

  // Percorre cada combinação e verifica se há vencedor
  for (const [a, b, c] of combinacoesVitoria) {
    if (casas[a] && casas[a] === casas[b] && casas[a] === casas[c]) {
      // Encontrou vencedor! Retorna o símbolo e a linha vencedora
      return {
        vencedor: casas[a],
        linhaVencedora: [a, b, c],
      };
    }
  }

  // Nenhum vencedor encontrado
  return { vencedor: null, linhaVencedora: null };
}
