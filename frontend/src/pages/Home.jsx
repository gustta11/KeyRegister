import Professor from '../imagens/icone_professor.png';
import Sala from '../imagens/icone_salas.png';
import Disciplina from '../imagens/icone_livro.png';
import Turma from '../imagens/icone_turmas.png';
import Visualizar from '../imagens/imagem_lupa.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div className='links'>
        <div className='imagem-botao'>
          <img src={Professor} alt="icone professor" />
          <Link to='/Cadastro_professor'><button>Cadastro de Professor</button></Link>
        </div>
        <div className='imagem-botao'>
          <img src={Sala} alt="icone sala" />
          <Link to='/Cadastro_sala'><button>Cadastro de Sala</button></Link>
        </div>
        <div className='imagem-botao'>
          <img src={Disciplina} alt="icone disciplina" />
          <Link to='/Cadastro_disciplina'><button>Cadastro de Disciplina</button></Link>
        </div>
        <div className='imagem-botao'>
          <img src={Turma} alt="icone turma" />
          <Link to='/Cadastro_turma'><button>Cadastro de Turmas</button></Link>
        </div>
        <div className='imagem-botao'>
          <img src={Visualizar} alt="icone visualizar" />
          <Link to='/Visualizar_cadastros'><button>Visualizar Cadastros</button></Link>
        </div>
      </div>
    );
  }
  export default Home;