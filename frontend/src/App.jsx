import './App.css';
import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';
import CadastroProfessor from './components/CadastroProfessor';
import CadastroDisciplina from './components/CadastroDisciplina';
import CadastroSala from './components/CadastroSala';
import CadastroTurma from './components/CadastroTurma';
import Visualizar from './components/Visualizar';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className='container-app'>
        <header>
          <Header />
        </header>
        
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Cadastro_professor' element={<CadastroProfessor />} />
            <Route path='/Cadastro_disciplina' element={<CadastroDisciplina />} />
            <Route path='/Cadastro_sala' element={<CadastroSala />} />
            <Route path='/Cadastro_turma' element={<CadastroTurma />} />
            <Route path='/Visualizar_cadastros' element={<Visualizar />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
