import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../server";

const PersonEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [person, setPerson] = useState({
    id: "",
    name: "",
    phoneNumber: "",
    address: ""
  });

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await api.get(`/person/${id}`);
        setPerson(response.data);
      } catch (error) {
        console.error("Error fetching person:", error);
      }
    };

    fetchPerson();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/person/${id}`, person);
      navigate("/person");
    } catch (error) {
      console.error("Error updating person:", error);
    }
  };

  return (
    <div className="person-edit">
      <h2>Edit Person</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Person ID:
          <input type="number" name="id" value={person.id} onChange={handleInputChange} />
        </label>
        <label>
          Name of the Person Adopting:
          <input type="text" name="name" value={person.name} onChange={handleInputChange} />
        </label>
        <label>
          Phone Number of the Person Adopting:
          <input type="text" name="phoneNumber" value={person.phoneNumber} onChange={handleInputChange} />
        </label>
        <label>
          Address of the Person Adopting:
          <input type="text" name="address" value={person.address} onChange={handleInputChange} />
        </label>
        <button type="submit">Save</button>
        <Link to="/person" className="cancel-btn">Cancel</Link>
      </form>
    </div>
  );
};

export default PersonEdit;
