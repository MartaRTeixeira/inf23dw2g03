import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../server";

const AdoptionEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [adoption, setAdoption] = useState({
    id: "",
    idAnimal: "",
    name: "",
    address: "",
    idPerson: "",
    idVolunteer: "",
    description: ""
  });

  useEffect(() => {
    const fetchAdoption = async () => {
      try {
        const response = await api.get(`/adoption/${id}`);
        setAdoption(response.data);
      } catch (error) {
        console.error("Error fetching adoption:", error);
      }
    };

    fetchAdoption();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdoption({ ...adoption, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAdoption({ ...adoption, [name]: checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/adoption/${id}`, adoption);
      navigate("/adoption");
    } catch (error) {
      console.error("Error updating adoption:", error);
    }
  };

  return (
    <div className="adoption-edit">
      <h2>Edit Adoption</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Adoption ID:
          <input type="number" name="id" value={adoption.id} onChange={handleInputChange} />
        </label>
        <label>
          Animal ID:
          <input type="number" name="idAnimal" value={adoption.idAnimal} onChange={handleInputChange} />
        </label>
        <label>
          Name of Adopter:
          <input type="text" name="name" value={adoption.name} onChange={handleInputChange} />
        </label>
        <label>
          Address of the Adopter:
          <input type="text" name="address" value={adoption.address} onChange={handleInputChange} />
        </label>
        <label>
          Person ID:
          <input type="number" name="idPerson" value={adoption.idPerson} onChange={handleInputChange} />
        </label>
        <label>
          Volunteer ID:
          <input type="number" name="idVolunteer" value={adoption.idVolunteer} onChange={handleInputChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={adoption.description} onChange={handleInputChange} />
        </label>
        <button type="submit">Save</button>
        <Link to="/adoption" className="cancel-btn">Cancel</Link>
      </form>
    </div>
  );
};

export default AdoptionEdit;
