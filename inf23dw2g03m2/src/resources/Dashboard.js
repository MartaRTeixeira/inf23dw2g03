import React, { useState } from "react";
import api from "../server";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [animais, setAnimais] = useState([]);
  const [animalDetalhe, setAnimalDetalhe] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`/animais?nome_like=${searchQuery}`);
      setAnimais(response.data);
    } catch (error) {
      console.error("Error searching animais:", error);
    }
  };

  const fetchAnimalDetalhe = async (id) => {
    try {
      const response = await api.get(`/animal/${id}`);
      setAnimalDetalhe(response.data);
    } catch (error) {
      console.error("Error fetching animal detail:", error);
    }
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <form onSubmit={handleSearch}>
        <label>
          Procurar Animal:
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>
        <button type="submit">Procurar</button>
      </form>

      <div className="animal-list">
        <h3>Animais</h3>
        <ul>
          {animais.map((animal) => (
            <li key={animal.id} onClick={() => fetchAnimalDetalhe(animal.id)}>
              {animal.nome}
            </li>
          ))}
        </ul>
      </div>

      {animalDetalhe && (
        <div className="animal-detalhe">
          <h3>Detalhes do Animal</h3>
          <p><strong>Nome:</strong> {animalDetalhe.nome}</p>
          <p><strong>Tipo de Conta:</strong> {animalDetalhe.tipo_de_conta}</p>
          <p><strong>Número Fiscal:</strong> {animalDetalhe.numero_fiscal}</p>
          <p><strong>Email:</strong> {animalDetalhe.email}</p>
          <p><strong>Contacto:</strong> {animalDetalhe.contacto}</p>
          <p><strong>Plano:</strong> {animalDetalhe.plano}</p>
          <p><strong>Periodicidade de Pagamento:</strong> {animalDetalhe.periodicidade_de_pagamento}</p>
          <p><strong>Data do Último Pagamento:</strong> {new Date(animalDetalhe.data_ultimo_pagamento).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
