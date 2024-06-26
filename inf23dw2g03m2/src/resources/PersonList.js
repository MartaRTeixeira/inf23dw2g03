import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../server";
import AuthContext from "../components/authContext";
import '../style/display.css'; // Import the CSS file

const PersonList = () => {
  const { authenticated } = useContext(AuthContext);
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);

  const [searchPersonID, setSearchPersonID] = useState("");
  const [searchPersonName, setSearchPersonName] = useState("");
  const [searchPersonPhoneNumber, setSearchPersonPhoneNumber] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const personsResult = await api.get("/person");
        const personsData = personsResult.data;

        setPersons(personsData);
        setFilteredPersons(personsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filterPersons = () => {
      let filtered = [...persons];

      if (searchPersonID) {
        filtered = filtered.filter((person) =>
          person.idPerson.toString().toLowerCase().includes(searchPersonID.toLowerCase())
        );
      }

      if (searchPersonName) {
        filtered = filtered.filter((person) =>
          person.name.toLowerCase().includes(searchPersonName.toLowerCase())
        );
      }

      if (searchPersonPhoneNumber) {
        filtered = filtered.filter((person) =>
          person.phoneNumber.toLowerCase().includes(searchPersonPhoneNumber.toLowerCase())
        );
      }

      setFilteredPersons(filtered);
    };

    filterPersons();
  }, [searchPersonID, searchPersonName, searchPersonPhoneNumber, persons]);

  const deletePerson = async (id) => {
    try {
      await api.delete(`/person/${id}`);
      setPersons(persons.filter((person) => person.id !== id));
      setFilteredPersons(filteredPersons.filter((person) => person.id !== id));
    } catch (error) {
      console.error("Error deleting person:", error);
    }
  };

  return (
    <div className="list-container">
      <h1>Persons</h1>
      <div className="filters">
        <label>
          Person ID:
          <input
            type="number"
            value={searchPersonID}
            onChange={(e) => setSearchPersonID(e.target.value)}
          />
        </label>
        <label>
          Name of the Person:
          <input
            type="text"
            value={searchPersonName}
            onChange={(e) => setSearchPersonName(e.target.value)}
          />
        </label>
        <label>
          Phone Number of the Person:
          <input
            type="text"
            value={searchPersonPhoneNumber}
            onChange={(e) => setSearchPersonPhoneNumber(e.target.value)}
          />
        </label>
        {authenticated ? (
          <Link to="/person/new" className="new-item">
            New Person
          </Link>
        ) : (
          <p className="authentication-message">Authentication Necessary</p>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>Person ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPersons.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.phoneNumber}</td>
              <td>{person.description}</td>
              <td>
                {authenticated ? (
                  <>
                    <Link to={`/person/edit/${person.id}`} className="edit-btn">
                      Edit
                    </Link>
                    <button onClick={() => deletePerson(person.id)} className="delete-btn">
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

export default PersonList;
