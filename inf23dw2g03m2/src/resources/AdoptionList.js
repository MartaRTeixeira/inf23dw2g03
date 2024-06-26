import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../server";
import AuthContext from "../components/authContext";
import '../style/display.css'; // Import the CSS file

const AdoptionList = () => {
  const { authenticated } = useContext(AuthContext);
  const [adoptions, setAdoptions] = useState([]);
  const [filteredAdoptions, setFilteredAdoptions] = useState([]);

  const [searchAnimalIDAdoption, setSearchAnimalIDAdoption] = useState("");
  const [searchAnimalNameAdoption, setSearchAnimalNameAdoption] = useState("");
  const [searchAnimalAddressAdoption, setSearchAnimalAddressAdoption] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adoptionsResult = await api.get("/adoption");
        const adoptionsData = adoptionsResult.data;

        setAdoptions(adoptionsData);
        setFilteredAdoptions(adoptionsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filterAdoptions = () => {
      let filtered = [...adoptions];

      if (searchAnimalIDAdoption) {
        filtered = filtered.filter((adoption) =>
          adoption.idAnimal.toLowerCase().includes(searchAnimalIDAdoption.toLowerCase())
        );
      }

      if (searchAnimalNameAdoption) {
        filtered = filtered.filter((adoption) =>
          adoption.name.toLowerCase().includes(searchAnimalNameAdoption.toLowerCase())
        );
      }

      if (searchAnimalAddressAdoption) {
        filtered = filtered.filter((adoption) =>
          adoption.address.toLowerCase().includes(searchAnimalAddressAdoption.toLowerCase())
        );
      }

      setFilteredAdoptions(filtered);
    };

    filterAdoptions();
  }, [searchAnimalIDAdoption, searchAnimalNameAdoption, searchAnimalAddressAdoption, adoptions]);

  const deleteAdoption = async (id) => {
    try {
      await api.delete(`/adoption/${id}`);
      setAdoptions(adoptions.filter((adoption) => adoption.id !== id));
      setFilteredAdoptions(filteredAdoptions.filter((adoption) => adoption.id !== id));
    } catch (error) {
      console.error("Error deleting adoption:", error);
    }
  };

  return (
    <div className="list-container">
      <h1>Adoptions</h1>
      <div className="filters">
        <label>
          Animal ID:
          <input
            type="number"
            value={searchAnimalIDAdoption}
            onChange={(e) => setSearchAnimalIDAdoption(e.target.value)}
          />
        </label>
        <label>
          Name of the Adopter:
          <input
            type="text"
            value={searchAnimalNameAdoption}
            onChange={(e) => setSearchAnimalNameAdoption(e.target.value)}
          />
        </label>
        <label>
          Address of the Adopter:
          <input
            type="text"
            value={searchAnimalAddressAdoption}
            onChange={(e) => setSearchAnimalAddressAdoption(e.target.value)}
          />
        </label>
        {authenticated ? (
          <Link to="/adoption/new" className="new-item">
            New Adoption
          </Link>
        ) : (
          <p className="authentication-message">Authentication Necessary</p>
        )}
      </div>
      <table>
      <thead>
          <tr>
            <th>Adoption ID</th>
            <th>Animal ID</th>
            <th>Name of Adopter</th>
            <th>Address of the Adopter</th>
            <th>Person ID</th>
            <th>Volunteer ID</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdoptions.map((adoption) => (
            <tr key={adoption.id}>
              <td>{adoption.id}</td>
              <td>{adoption.idAnimal}</td>
              <td>{adoption.name}</td>
              <td>{adoption.address}</td>
              <td>{adoption.idPerson}</td>
              <td>{adoption.idVolunteer}</td>
              <td>{adoption.description}</td>
              <td>
                {authenticated ? (
                  <>
                    <Link to={`/adoption/edit/${adoption.id}`} className="edit-btn">
                      Edit
                    </Link>
                    <button onClick={() => deleteAdoption(adoption.id)} className="delete-btn">
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

export default AdoptionList;
