import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../server";

const VolunteerNew = () => {
  const navigate = useNavigate();
  const [volunteer, setVolunteer] = useState({
    id: "",
    name: "",
    phoneNumber: "",
    address: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVolunteer({ ...volunteer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/volunteer", volunteer);
      navigate("/volunteer");
    } catch (error) {
      console.error("Error creating volunteer:", error);
    }
  };

  return (
    <div className="volunteer-new" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
      <div style={{ width: "400px", textAlign: "center" }}>
        <h2>New Volunteer</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Volunteer ID:
              <input
                type="number"
                name="id"
                value={volunteer.id}
                onChange={handleInputChange}
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Name of the Volunteer:
              <input
                type="text"
                name="name"
                value={volunteer.name}
                onChange={handleInputChange}
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Phone Number of the Volunteer:
              <input
                type="text"
                name="phoneNumber"
                value={volunteer.phoneNumber}
                onChange={handleInputChange}
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "40px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Address of the Volunteer:
              <input
                type="text"
                name="address"
                value={volunteer.address}
                onChange={handleInputChange}
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button type="submit" style={{ padding: "12px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", width: "45%" }}>Save</button>
            <Link to="/volunteer" className="cancel-btn" style={{ padding: "12px 20px", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", textDecoration: "none", textAlign: "center", display: "inline-block", width: "45%", marginLeft: "10px" }}>Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VolunteerNew;
