import { useState } from "react";
import { Link } from "react-router-dom";
import Voltar from '../imagens/icone_voltar.png';
import Turma from '../imagens/icone_turmas.png';
import './cadastro.css';

function CadastroTurma() {

  const [formValores, setFormValores] = useState({
    nome_turma: '',
    turno:''
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
      const response = await fetch('http://localhost:3000/turmas', {
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
          <img src={Turma} alt="icone turma" />
          <label>
            Nome da Turma
            <input type="text" name="nome_turma" value={formValores.nome_turma} onChange={handleChange} />
          </label>
          <label>
            Turno
            <input type="text" name="turno" value={formValores.turno} onChange={handleChange} />
          </label>

          <div className="botao-cadastrar">
            <button type='submit'> CADASTRAR </button>
          </div>

        </div>
      </div>
    </form>
  )
}
export default CadastroTurma;
