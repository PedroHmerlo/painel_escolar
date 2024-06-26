import logo from './logo.svg';
import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './views/Home/Home'
import About from './views/About/About';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Navbar from './components/Navbar';
import Cadastro from './views/Cadastro/Cadastro';


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='sobrenos' element={<about/>}/>
        <Route path='cadastro' element={<Cadastro/>}/>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
