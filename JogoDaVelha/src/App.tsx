/**
 * App.tsx — Componente raiz da aplicação
 *
 * Responsável apenas por montar o ponto de entrada da aplicação.
 * Toda a lógica do jogo está encapsulada na página JogoDaVelha.
 */
import { JogoDaVelha } from './pages';

function App() {
  return <JogoDaVelha />;
}

export default App;
