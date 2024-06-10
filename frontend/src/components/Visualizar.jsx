import React, { useState, useEffect } from "react";
import './CadastroDisciplina';

function Visualizar() {

  const [consultaDados, setconsultaDados] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/disciplinas', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();
      setconsultaDados(data);
    } catch (err) {
      console.error("Erro ao buscar dados no banco", err);
    }
  };

  useEffect(() => {
    handleSubmit(); 
  }, []);

  return (
    <div className="read-container">
      <form onSubmit={handleSubmit} className="read-form">
        <button type="submit" className="read-button">Ler dados do banco</button>
      </form>

      <ol className="read-list">
        {consultaDados.map((linha, index) => (
          <li key={index} className="read-dados">
            <div className="dados">nome_disciplina: {linha.nome_disciplina}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Visualizar;