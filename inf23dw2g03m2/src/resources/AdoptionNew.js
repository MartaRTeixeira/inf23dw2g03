import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../server";

const AdoptionNew = () => {
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
    const fetchLastAnimal = async () => {
      try {
        const response = await api.get("/cliente?_sort=id&_order=desc&_limit=1");
        const lastCliente = response.data[0];
        if (lastCliente) {
          setAdoption((prevState) => ({ ...prevState, cliente: lastCliente.id }));
        }
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };

    fetchLastAnimal();
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAdoption({ ...adoption, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/adoption", adoption);
      navigate("/adoptions");
    } catch (error) {
      console.error("Error creating adoption:", error);
    }
  };

  return (
    <div className="adoption-new" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
      <div style={{ width: "400px", textAlign: "center" }}>
        <h2>New Adoption</h2>
        <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Adoption ID:
              <input
                type="number"
                name="id"
                value={adoption.id}
                onChange={handleInputChange}
                required
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Animal ID:
              <input
                type="number"
                name="idAnimal"
                value={adoption.idAnimal}
                onChange={handleInputChange}
                required
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Name of Adopter:
              <input
                type="text"
                name="name"
                value={adoption.name}
                onChange={handleInputChange}
                required
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Address of the Adopter:
              <input
                type="text"
                name="address"
                checked={adoption.address}
                onChange={handleInputChange}
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Person ID:
              <input
                type="number"
                name="idPerson"
                value={adoption.idPerson}
                onChange={handleInputChange}
                required
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "40px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Volunteer ID:
              <input
                type="number"
                name="idVolunteer"
                value={adoption.idVolunteer}
                onChange={handleInputChange}
                required
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Description:
              <input
                type="number"
                name="description"
                value={adoption.description}
                onChange={handleInputChange}
                required
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button type="submit" style={{ padding: "12px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", width: "45%" }}>Save</button>
            <Link to="/adoptions" className="cancel-btn" style={{ padding: "12px 20px", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", textDecoration: "none", textAlign: "center", display: "inline-block", width: "45%", marginLeft: "10px" }}>Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdoptionNew;
