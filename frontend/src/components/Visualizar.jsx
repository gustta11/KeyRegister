import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Voltar from '../imagens/icone_voltar.png';
import './visualizar.css';

const Visualizar = () => {
  const [professores, setProfessores] = useState([]);
  const [salas, setSalas] = useState([]);
  const [disciplinas, setDisciplinas] = useState([]);
  const [turmas, setTurmas] = useState([]);

  const fetchData = async (url, setState) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      setState(json);
    } catch (err) {
      console.error("Erro ao enviar", err);
    }
  };

  useEffect(() => {
    fetchData('http://localhost:3000/professores', setProfessores);
    fetchData('http://localhost:3000/salas', setSalas);
    fetchData('http://localhost:3000/disciplinas', setDisciplinas);
    fetchData('http://localhost:3000/turmas', setTurmas);
  }, []);

  return (
    <div className="layout-geral-consulta">
      <div className='voltar'>
        <Link to='/'><img src={Voltar} alt="voltar" /></Link>
      </div>
      
      <h2>Professores</h2>
      <ul>
        {professores.map((professor, index) => (
          <li key={index}>
            {Object.entries(professor).map(([key, val]) => (
              <div key={key}>
                <strong>{key}:</strong> {val}
              </div>
            ))}
          </li>
        ))}
      </ul>

      <h2>Salas</h2>
      <ul>
        {salas.map((sala, index) => (
          <li key={index}>
            {Object.entries(sala).map(([key, val]) => (
              <div key={key}>
                <strong>{key}:</strong> {val}
              </div>
            ))}
          </li>
        ))}
      </ul>

      <h2>Disciplinas</h2>
      <ul>
        {disciplinas.map((disciplina, index) => (
          <li key={index}>
            {Object.entries(disciplina).map(([key, val]) => (
              <div key={key}>
                <strong>{key}:</strong> {val}
              </div>
            ))}
          </li>
        ))}
      </ul>

      <h2>Turmas</h2>
      <ul>
        {turmas.map((turma, index) => (
          <li key={index}>
            {Object.entries(turma).map(([key, val]) => (
              <div key={key}>
                <strong>{key}:</strong> {val}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Visualizar;
