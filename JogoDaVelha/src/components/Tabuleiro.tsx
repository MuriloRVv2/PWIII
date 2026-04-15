import { TabuleiroProps } from '../types';
import { calcularVencedor } from '../utils/calcularVencedor';
import { Casa } from './Casa';

/**
 * Componente Tabuleiro (Board)
 *
 * Renderiza o grid 3x3 do jogo da velha.
 * Controla o clique em cada casa e exibe o status atual do jogo.
 *
 * Props:
 * - xJogaAgora: indica se é a vez do jogador X
 * - casas: estado atual do tabuleiro (array de 9 posições)
 * - aoJogar: callback chamado quando uma jogada válida é feita
 */
export function Tabuleiro({ xJogaAgora, casas, aoJogar }: TabuleiroProps) {
  /**
   * Lida com o clique em uma casa do tabuleiro.
   * Ignora o clique se já houver vencedor ou se a casa já estiver ocupada.
   *
   * @param indice - Índice da casa clicada (0 a 8)
   */
  function handleClicar(indice: number) {
    // Verifica se já há vencedor ou se a casa já está preenchida
    const { vencedor } = calcularVencedor(casas);
    if (vencedor || casas[indice]) {
      return; // Jogada inválida: ignora o clique
    }

    // Cria uma cópia do array para manter imutabilidade (princípio do React)
    const proximasCasas = casas.slice();

    // Define o valor da casa com base em quem está jogando
    proximasCasas[indice] = xJogaAgora ? 'X' : 'O';

    // Notifica o componente pai com o novo estado do tabuleiro
    aoJogar(proximasCasas);
  }

  // Calcula o vencedor atual para exibir status e destacar casas vencedoras
  const { vencedor, linhaVencedora } = calcularVencedor(casas);

  // Verifica se todas as casas foram preenchidas (empate)
  const empate = !vencedor && casas.every((casa) => casa !== null);

  // Define a mensagem de status do jogo
  let statusJogo: string;
  if (vencedor) {
    statusJogo = `🏆 Vencedor: ${vencedor}`;
  } else if (empate) {
    statusJogo = '🤝 Empate! Ninguém venceu.';
  } else {
    statusJogo = `Próximo jogador: ${xJogaAgora ? 'X' : 'O'}`;
  }

  /**
   * Verifica se uma casa específica faz parte da linha vencedora.
   * @param indice - Índice da casa (0 a 8)
   */
  function estaDestacada(indice: number): boolean {
    return linhaVencedora?.includes(indice) ?? false;
  }

  return (
    <div>
      {/* Status do jogo: vez do jogador, vencedor ou empate */}
      <div
        className={`
          text-center text-xl font-bold mb-6 py-2 px-4 rounded-lg
          ${vencedor ? 'bg-yellow-100 text-yellow-800' : ''}
          ${empate ? 'bg-gray-100 text-gray-700' : ''}
          ${!vencedor && !empate ? 'bg-blue-50 text-blue-700' : ''}
        `}
      >
        {statusJogo}
      </div>

      {/* Grid do tabuleiro 3x3 */}
      <div className="grid grid-cols-3 gap-2">
        {/* Renderiza as 9 casas do tabuleiro usando map */}
        {casas.map((valor, indice) => (
          <Casa
            key={indice}
            valor={valor}
            aoClicar={() => handleClicar(indice)}
            destacada={estaDestacada(indice)}
          />
        ))}
      </div>
    </div>
  );
}
