import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../server";
import AuthContext from "../components/authContext";
import '../style/display.css'; // Import the CSS file

const AnimalList = () => {
  const { authenticated } = useContext(AuthContext);
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);

  const [searchAnimalID, setSearchAnimalID] = useState("");
  const [searchAnimalName, setSearchAnimalName] = useState("");
  const [searchAnimalType, setSearchAnimalType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const animalsResult = await api.get("/animal");
        const animalsData = animalsResult.data;

        setAnimals(animalsData);
        setFilteredAnimals(animalsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filterAnimals = () => {
      let filtered = [...animals];

      if (searchAnimalID) {
        filtered = filtered.filter((animal) =>
          animal.id.toLowerCase().includes(searchAnimalID.toLowerCase())
        );
      }

      if (searchAnimalName) {
        filtered = filtered.filter((animal) =>
          animal.name.toLowerCase().includes(searchAnimalName.toLowerCase())
        );
      }

      if (searchAnimalType) {
        filtered = filtered.filter((animal) =>
          animal.age.toLowerCase().includes(searchAnimalType.toLowerCase())
        );
      }

      setFilteredAnimals(filtered);
    };

    filterAnimals();
  }, [searchAnimalID, searchAnimalName, searchAnimalType, animals]);

  const deleteAnimal = async (id) => {
    try {
      await api.delete(`/animal/${id}`);
      setAnimals(animals.filter((animal) => animal.id !== id));
      setFilteredAnimals(filteredAnimals.filter((animal) => animal.id !== id));
    } catch (error) {
      console.error("Error deleting animal:", error);
    }
  };

  return (
    <div className="list-container">
      <h1>Animals</h1>
      <div className="filters">
        <label>
          Animal ID:
          <input
            type="number"
            value={searchAnimalID}
            onChange={(e) => setSearchAnimalID(e.target.value)}
          />
        </label>
        <label>
          Name of the Animal:
          <input
            type="text"
            value={searchAnimalName}
            onChange={(e) => setSearchAnimalName(e.target.value)}
          />
        </label>
        <label>
          Type of Animal:
          <input
            type="text"
            value={searchAnimalType}
            onChange={(e) => setSearchAnimalType(e.target.value)}
          />
        </label>
        {authenticated ? (
          <Link to="/animal/new" className="new-item">
            New Animal
          </Link>
        ) : (
          <p className="authentication-message">Authentication Necessary</p>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Type</th>
            <th>Breed</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAnimals.map((animal) => (
            <tr key={animal.id}>
              <td>{animal.id}</td>
              <td>{animal.name}</td>
              <td>{animal.age}</td>
              <td>{animal.typeAnimal}</td>
              <td>{animal.breed}</td>
              <td>{animal.description}</td>
              <td>
                {authenticated ? (
                  <>
                    <Link to={`/animal/edit/${animal.id}`} className="edit-btn">
                      Edit
                    </Link>
                    <button onClick={() => deleteAnimal(animal.id)} className="delete-btn">
                      Delete
                    </button>
                  </>
                ) : (
                  <p className="authentication-message">Authentication Necessary</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnimalList;
