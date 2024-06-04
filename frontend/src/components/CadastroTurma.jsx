import { useState } from "react";

function CadastroTurma () {

const [formValores, setFormValores] = useState({
  nome_turma: '',
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
    const response = await fetch('http://localhost:3000/pessoas', {
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

    <div className='container-create'>
      <div className='formulario'>
        <label>
          Nome da Turma
          <input type="text" name="nome" value={formValores.nome_turma} onChange={handleChange} />
        </label>

        <button type='submit'> CADASTRAR </button>

      </div>
    </div>
  </form>
)
}
export default CadastroTurma;
