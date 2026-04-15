// Tipos utilizados no jogo da velha

/**
 * Representa o valor de uma casa do tabuleiro.
 * Pode ser 'X', 'O' ou null (vazia).
 */
export type ValorCasa = 'X' | 'O' | null;

/**
 * Representa o estado do tabuleiro: um array de 9 casas.
 */
export type Tabuleiro = ValorCasa[];

/**
 * Props do componente Casa (Square).
 */
export interface CasaProps {
  valor: ValorCasa;
  aoClicar: () => void;
  destacada?: boolean;
}

/**
 * Props do componente Tabuleiro (Board).
 */
export interface TabuleiroProps {
  xJogaAgora: boolean;
  casas: Tabuleiro;
  aoJogar: (proximasCasas: Tabuleiro) => void;
}

/**
 * Resultado do cálculo de vencedor.
 */
export interface ResultadoVencedor {
  vencedor: ValorCasa;
  linhaVencedora: number[] | null;
}
