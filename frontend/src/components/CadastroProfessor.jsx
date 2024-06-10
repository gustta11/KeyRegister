import { useState } from "react";
import { Link } from "react-router-dom";
import Voltar from '../imagens/icone_voltar.png';
import Professor from '../imagens/icone_professor.png';
import './cadastro.css';

function CadastroProfessor() {

  const [formValores, setFormValores] = useState({
    nome: '',
    matricula: '',
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
      const response = await fetch('http://localhost:3000/professores', {
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
          <div>
            <img src={Professor} alt="icone professor" />
          </div>
          <label>
            Nome
            <input type="text" name="nome" value={formValores.nome} onChange={handleChange} />
          </label>
          <label>
            Matrícula
            <input type="text" name="matricula" value={formValores.matricula} onChange={handleChange} />
          </label>
          <div className="botao-cadastrar">
            <button type='submit'>CADASTRAR</button>
          </div>

        </div>
      </div>
    </form>
  )
}
export default CadastroProfessor;
