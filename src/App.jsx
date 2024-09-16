import { Cabecalho } from './Cabecalho.jsx';
import { Conteudo } from './Conteudo.jsx';
import { Menu } from './Menu.jsx';
import { Rodape } from './Rodape.jsx';

function App() {
  return (
    <div>
      <Cabecalho />
      <Menu />
      <Conteudo />
      <Rodape />
    </div>
  );
}

export default App;
