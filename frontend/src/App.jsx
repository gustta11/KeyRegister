import './App.css';
import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';
import CadastroProfessor from './components/CadastroProfessor';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


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
