import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Logar from './views/Logar';
import Principal from './views/Principal';
import CadastroParafuso from './views/CadastroParafuso';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Logar/>} />
        <Route path='/telaP' element={<Principal/>} />
        <Route path='/cadastroParafuso' element={<CadastroParafuso/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
