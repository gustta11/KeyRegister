import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Voltar from '../imagens/icone_voltar.png';
import './cadastro.css';

function Visualizar() {
  const [disciplinas, setDisciplinas] = useState([]);
  const [professores, setProfessores] = useState([]);
  const [salas, setSalas] = useState([]);
  const [turmas, setTurmas] = useState([]);

  const fetchData = async (url, setState) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setState(data);
    } catch (err) {
      console.error(`Erro ao buscar dados em ${url}`, err);
    }
  };

  useEffect(() => {
    fetchData('http://localhost:3000/disciplinas', setDisciplinas);
    fetchData('http://localhost:3000/professor', setProfessores);
    fetchData('http://localhost:3000/salas', setSalas);
    fetchData('http://localhost:3000/turmas', setTurmas);
  }, []);

  return (
    <div className="container">
      <div className='voltar'>
        <Link to='/'><img src={Voltar} alt="voltar" /></Link>
      </div>
      <div className="data-section">
        <h2>Disciplinas</h2>
        <ul>
          {disciplinas.map((disciplina, index) => (
            <li key={index}>
              Nome da Disciplina: {disciplina.nome_disciplina}
            </li>
          ))}
        </ul>

        <h2>Professores</h2>
        <ul>
          {professores.map((professor, index) => (
            <li key={index}>
              Nome: {professor.nome}, Matrícula: {professor.matricula}
            </li>
          ))}
        </ul>

        <h2>Salas</h2>
        <ul>
          {salas.map((sala, index) => (
            <li key={index}>
              Nome da Sala: {sala.nome_sala}
            </li>
          ))}
        </ul>

        <h2>Turmas</h2>
        <ul>
          {turmas.map((turma, index) => (
            <li key={index}>
              Nome da Turma: {turma.nome_turma}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Visualizar;
