import logo from './logo.svg';
import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './views/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Navbar from './components/Navbar';
import AddUsuario from './views/AdicionarUsuarios/index'
import GestaoUsuarios from './views/GestaoUsuarios';
import AtualizarUsusarios from './views/AtualizarUsuarios';
import Logar from './views/Logar';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='sobrenos' element={<about/>}/>
        <Route path='/usuarios' element={<AddUsuario/>}/>
        <Route path='/gestaoUsu' element={<GestaoUsuarios/>}/>
        <Route path='/atualizarUsuario/:id' element={<AtualizarUsusarios/>}/>
        <Route path='/logar' element={<Logar/>}/>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
