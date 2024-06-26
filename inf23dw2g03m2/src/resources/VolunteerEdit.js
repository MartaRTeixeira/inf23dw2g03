import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../server";

const VolunteerEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [volunteer, setVolunteer] = useState({
    id: "",
    name: "",
    phoneNumber: "",
    address: ""
  });

  useEffect(() => {
    const fetchVolunteer = async () => {
      try {
        const response = await api.get(`/volunteer/${id}`);
        setVolunteer(response.data);
      } catch (error) {
        console.error("Error fetching volunteer:", error);
      }
    };

    fetchVolunteer();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVolunteer({ ...volunteer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/volunteer/${id}`, volunteer);
      navigate("/volunteer");
    } catch (error) {
      console.error("Error updating volunteer:", error);
    }
  };

  return (
    <div className="volunteer-edit">
      <h2>Edit Volunteer</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Volunteer ID:
          <input type="number" name="id" value={volunteer.id} onChange={handleInputChange} />
        </label>
        <label>
          Name of the Volunteer:
          <input type="text" name="name" value={volunteer.name} onChange={handleInputChange} />
        </label>
        <label>
          Phone Number of the Volunteer:
          <input type="text" name="phoneNumber" value={volunteer.phoneNumber} onChange={handleInputChange} />
        </label>
        <label>
          Address of the Volunteer:
          <input type="text" name="address" value={volunteer.address} onChange={handleInputChange} />
        </label>
        <button type="submit">Save</button>
        <Link to="/volunteer" className="cancel-btn">Cancel</Link>
      </form>
    </div>
  );
};

export default VolunteerEdit;
