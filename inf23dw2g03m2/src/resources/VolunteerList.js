import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../server";
import AuthContext from "../components/authContext";
import '../style/display.css'; // Import the CSS file

const VolunteerList = () => {
  const { authenticated } = useContext(AuthContext);
  const [volunteers, setVolunteers] = useState([]);
  const [filteredVolunteers, setFilteredVolunteers] = useState([]);

  const [searchVolunteerID, setSearchVolunteerID] = useState("");
  const [searchVolunteerName, setSearchVolunteerName] = useState("");
  const [searchVolunteerPhoneNumber, setSearchVolunteerPhoneNumber] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const volunteersResult = await api.get("/volunteer");
        const volunteersData = volunteersResult.data;

        setVolunteers(volunteersData);
        setFilteredVolunteers(volunteersData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filterVolunteers = () => {
      let filtered = [...volunteers];

      if (searchVolunteerID) {
        filtered = filtered.filter((volunteer) =>
          volunteer.idVolunteer.toLowerCase().includes(searchVolunteerID.toLowerCase())
        );
      }

      if (searchVolunteerName) {
        filtered = filtered.filter((volunteer) =>
          volunteer.name.toLowerCase().includes(searchVolunteerName.toLowerCase())
        );
      }

      if (searchVolunteerPhoneNumber) {
        filtered = filtered.filter((volunteer) =>
          volunteer.phoneNumber.toString().toLowerCase().includes(searchVolunteerPhoneNumber.toLowerCase())
        );
      }

      setFilteredVolunteers(filtered);
    };

    filterVolunteers();
  }, [searchVolunteerID, searchVolunteerName, searchVolunteerPhoneNumber, volunteers]);

  const deleteVolunteer = async (id) => {
    try {
      await api.delete(`/volunteer/${id}`);
      setVolunteers(volunteers.filter((volunteer) => volunteer.id !== id));
      setFilteredVolunteers(filteredVolunteers.filter((volunteer) => volunteer.id !== id));
    } catch (error) {
      console.error("Error deleting volunteer:", error);
    }
  };

  return (
    <div className="list-container">
      <h1>Volunteers</h1>
      <div className="filters">
        <label>
          Volunteer ID:
          <input
            type="number"
            value={searchVolunteerID}
            onChange={(e) => setSearchVolunteerID(e.target.value)}
          />
        </label>
        <label>
          Name of the Volunteer:
          <input
            type="text"
            value={searchVolunteerName}
            onChange={(e) => setSearchVolunteerName(e.target.value)}
          />
        </label>
        <label>
          Phone Number of the Volunteer:
          <input
            type="text"
            value={searchVolunteerPhoneNumber}
            onChange={(e) => setSearchVolunteerPhoneNumber(e.target.value)}
          />
        </label>
        {authenticated ? (
          <Link to="/volunteer/new" className="new-item">
            New Volunteer
          </Link>
        ) : (
          <p className="authentication-message">Authentication Necessary</p>
        )}
      </div>
      <table>
        <thead>
          <tr>
            <th>Volunteer ID</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredVolunteers.map((volunteer) => (
            <tr key={volunteer.id}>
              <td>{volunteer.id}</td>
              <td>{volunteer.name}</td>
              <td>{volunteer.phoneNumber}</td>
              <td>{volunteer.address}</td>
              <td>
                {authenticated ? (
                  <>
                    <Link to={`/volunteer/edit/${volunteer.id}`} className="edit-btn">
                      Edit
                    </Link>
                    <button onClick={() => deleteVolunteer(volunteer.id)} className="delete-btn">
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

export default VolunteerList;
