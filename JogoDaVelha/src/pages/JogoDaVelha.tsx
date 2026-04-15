import { useState } from 'react';
import { Tabuleiro as TabuleiroType } from '../types';
import { Tabuleiro } from '../components/Tabuleiro';
import { HistoricoMovimentos } from '../components/HistoricoMovimentos';
import { calcularVencedor } from '../utils/calcularVencedor';

/**
 * Página principal: JogoDaVelha (Game)
 *
 * Componente raiz do jogo. Gerencia todo o estado global:
 * - Histórico de movimentos (para viagem no tempo)
 * - Movimento atual sendo visualizado
 *
 * O estado "xJogaAgora" é derivado do movimentoAtual (não é um estado separado),
 * evitando redundância e possíveis inconsistências — boa prática ensinada na doc.
 */
export function JogoDaVelha() {
  /**
   * Histórico completo de tabuleiros.
   * Cada entrada representa o estado do tabuleiro após um movimento.
   * Começa com um tabuleiro vazio (9 casas nulas).
   */
  const [historico, setHistorico] = useState<TabuleiroType[]>([
    Array(9).fill(null),
  ]);

  /**
   * Índice do movimento atualmente visualizado.
   * Permite "voltar no tempo" para qualquer jogada anterior.
   */
  const [movimentoAtual, setMovimentoAtual] = useState<number>(0);

  /**
   * xJogaAgora é DERIVADO do movimentoAtual, não é um estado separado.
   * Movimentos pares → vez do X | Movimentos ímpares → vez do O
   * Isso elimina estado redundante e garante consistência.
   */
  const xJogaAgora = movimentoAtual % 2 === 0;

  // O tabuleiro exibido corresponde ao movimento atual (pode ser o passado)
  const casasAtuais = historico[movimentoAtual];

  // Calcula vencedor do estado atual para mostrar/esconder o botão de reinício
  const { vencedor } = calcularVencedor(casasAtuais);
  const empate = !vencedor && casasAtuais.every((c) => c !== null);
  const jogoEncerrado = !!(vencedor || empate);

  /**
   * Callback chamado pelo Tabuleiro quando uma jogada válida é feita.
   *
   * Ao invés de apenas adicionar ao final do histórico, cortamos o histórico
   * no ponto atual — isso permite jogar a partir de um estado passado.
   *
   * @param proximasCasas - Estado do tabuleiro após a jogada
   */
  function handleJogar(proximasCasas: TabuleiroType) {
    // Descarta futuros movimentos se estiver visualizando um estado passado
    const proximoHistorico = [
      ...historico.slice(0, movimentoAtual + 1),
      proximasCasas,
    ];
    setHistorico(proximoHistorico);

    // Avança para o novo movimento (último do histórico atualizado)
    setMovimentoAtual(proximoHistorico.length - 1);
  }

  /**
   * Viagem no tempo: volta para um movimento específico do histórico.
   * Ao clicar em um botão do histórico, o tabuleiro volta para aquele estado.
   *
   * @param movimento - Índice do movimento para onde voltar
   */
  function irParaMovimento(movimento: number) {
    setMovimentoAtual(movimento);
  }

  /**
   * Reinicia o jogo completamente, limpando histórico e estado.
   */
  function reiniciarJogo() {
    setHistorico([Array(9).fill(null)]);
    setMovimentoAtual(0);
  }

  return (
    // Layout centralizado na tela com fundo gradiente
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 flex flex-col items-center justify-center p-6">
      {/* Cabeçalho do jogo */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-black text-gray-800 tracking-tight">
          🎮 Jogo da Velha
        </h1>
      </header>

      {/* Área principal: tabuleiro + histórico lado a lado */}
      <main className="flex flex-col md:flex-row gap-8 items-start justify-center w-full max-w-2xl">

        {/* Coluna esquerda: tabuleiro do jogo */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <Tabuleiro
            xJogaAgora={xJogaAgora}
            casas={casasAtuais}
            aoJogar={handleJogar}
          />

          {/* Botão de reiniciar — aparece apenas quando o jogo termina */}
          {jogoEncerrado && (
            <button
              onClick={reiniciarJogo}
              className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold
                         hover:bg-blue-700 transition-colors duration-200 shadow"
            >
              🔄 Jogar Novamente
            </button>
          )}
        </div>

        {/* Coluna direita: histórico de movimentos (time travel) */}
        <div className="bg-white rounded-2xl shadow-lg p-6 min-w-[200px] w-full md:w-auto">
          <HistoricoMovimentos
            historico={historico}
            movimentoAtual={movimentoAtual}
            aoSelecionarMovimento={irParaMovimento}
          />
        </div>
      </main>

      {/* Rodapé com indicadores dos jogadores */}
      <footer className="mt-10 flex gap-6 text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <span className="text-blue-600 font-bold text-lg">X</span> Jogador 1
        </span>
        <span className="flex items-center gap-1">
          <span className="text-red-500 font-bold text-lg">O</span> Jogador 2
        </span>
      </footer>
    </div>
  );
}
