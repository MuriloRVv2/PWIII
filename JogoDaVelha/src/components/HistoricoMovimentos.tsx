import { Tabuleiro } from '../types';

/**
 * Props do componente HistoricoMovimentos
 */
interface HistoricoMovimentosProps {
  historico: Tabuleiro[];       // Array com todos os estados do tabuleiro
  movimentoAtual: number;       // Índice do movimento que está sendo visualizado
  aoSelecionarMovimento: (movimento: number) => void; // Callback para viagem no tempo
}

/**
 * Componente HistoricoMovimentos
 *
 * Exibe a lista de movimentos realizados durante a partida.
 * Permite "viajar no tempo" clicando em um movimento anterior.
 *
 * Esse é o recurso de "time travel" ensinado na documentação do React.
 */
export function HistoricoMovimentos({
  historico,
  movimentoAtual,
  aoSelecionarMovimento,
}: HistoricoMovimentosProps) {
  return (
    <div className="w-full">
      <h2 className="text-lg font-bold text-gray-700 mb-3 flex items-center gap-2">
        {/* Ícone de relógio para representar o histórico */}
        🕐 Histórico de Jogadas
      </h2>

      {/* Lista ordenada de movimentos */}
      <ol className="space-y-2">
        {historico.map((_, movimento) => {
          // Define o texto do botão para cada movimento
          const descricao =
            movimento === 0
              ? 'Início do jogo'
              : `Jogada #${movimento}`;

          // Verifica se este é o movimento atualmente visualizado
          const ehMovimentoAtual = movimento === movimentoAtual;

          return (
            <li key={movimento}>
              <button
                onClick={() => aoSelecionarMovimento(movimento)}
                className={`
                  w-full text-left px-4 py-2 rounded-lg text-sm font-medium
                  transition-all duration-150 border
                  ${ehMovimentoAtual
                    // Movimento atual: destaque azul
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    // Outros movimentos: estilo neutro com hover
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                  }
                `}
              >
                {/* Ícone diferente para o estado atual */}
                {ehMovimentoAtual ? '▶ ' : '○ '}
                {descricao}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
