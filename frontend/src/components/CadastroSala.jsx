import { useState } from "react";
import { Link } from "react-router-dom";
import Voltar from '../imagens/icone_voltar.png';
import Sala from '../imagens/icone_salas.png';
import './cadastro.css';

function CadastroSala() {

  const [formValores, setFormValores] = useState({
    nome_sala: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValores(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Dados a serem enviados: ", formValores);
      const response = await fetch('http://localhost:3000/salas', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(formValores)
      });

      const json = await response.json();
      console.log(response)
      console.log(json);

    } catch (err) {
      console.error("Erro ao enviar", err)
    }
  };

  return (

    <form onSubmit={handleSubmit}>

      <div className='container'>

        <div className='voltar'>
          <Link to='/'><img src={Voltar} alt="voltar" /></Link>
        </div>

        <div className='formulario'>

          <img src={Sala} alt="icone sala" />

          <label>
            Nome da Sala
            <input type="text" name="nome_sala" value={formValores.nome_sala} onChange={handleChange} />
          </label>

          <div className="botao-cadastrar">
            <button type='submit'> CADASTRAR </button>
          </div>

        </div>
      </div>
    </form>
  )
}
export default CadastroSala;