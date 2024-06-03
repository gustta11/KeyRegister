import './Header.css'
import { Link } from 'react-router-dom';
import Voltar from '../imagens/icone_voltar.png';


const Header = () => {
    return (

        <div className="titulo-header">
            <div className='botao_voltar'>
            <Link to='/'><img src={Voltar} alt="voltar" /></Link>
            </div>
            <h1>Key Register</h1>
        </div>

    );
}

export default Header;
