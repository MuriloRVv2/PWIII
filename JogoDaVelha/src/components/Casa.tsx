import { CasaProps } from '../types';

/**
 * Componente Casa (Square)
 *
 * Representa uma única casa do tabuleiro do jogo da velha.
 * Recebe o valor atual ('X', 'O' ou null), a função de clique
 * e se a casa faz parte da linha vencedora (para destacar).
 */
export function Casa({ valor, aoClicar, destacada = false }: CasaProps) {
  return (
    <button
      // Estilo da casa: quadrado com borda, centralizado
      className={`
        w-20 h-20 text-4xl font-extrabold border-2 border-gray-400
        flex items-center justify-center cursor-pointer
        transition-all duration-200 rounded-lg
        ${destacada
          // Casa vencedora: fundo dourado e destaque visual
          ? 'bg-yellow-300 border-yellow-500 scale-105 shadow-lg'
          // Casa normal: hover com fundo cinza claro
          : 'bg-white hover:bg-gray-100 hover:scale-105'
        }
        ${valor === 'X' ? 'text-blue-600' : 'text-red-500'}
      `}
      onClick={aoClicar}
    >
      {/* Exibe o valor da casa: 'X', 'O' ou vazio */}
      {valor}
    </button>
  );
}
