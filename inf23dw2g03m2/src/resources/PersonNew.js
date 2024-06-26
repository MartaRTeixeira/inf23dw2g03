import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../server";

const PersonNew = () => {
  const navigate = useNavigate();
  const [person, setPerson] = useState({
    id: "",
    name: "",
    phoneNumber: "",
    address: ""
  });

  useEffect(() => {
    const fetchLastCliente = async () => {
      try {
        const response = await api.get("/cliente?_sort=id&_order=desc&_limit=1");
        const lastCliente = response.data[0];
        if (lastCliente) {
          setPerson((prevState) => ({ ...prevState, cliente: lastCliente.id }));
        }
      } catch (error) {
        console.error("Error fetching last cliente:", error);
      }
    };

    fetchLastCliente();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/person", person);
      navigate("/person");
    } catch (error) {
      console.error("Error creating person:", error);
    }
  };

  return (
    <div className="person-new" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
      <div style={{ width: "400px", textAlign: "center" }}>
        <h2>New Person</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Person ID:
              <input
                type="number"
                name="id"
                value={person.id}
                onChange={handleInputChange}
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Name of the Person Adopting:
              <input
                type="text"
                name="name"
                value={person.name}
                onChange={handleInputChange}
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Phone Number of the Person Adopting:
              <input
                type="text"
                name="phoneNumber"
                value={person.phoneNumber}
                onChange={handleInputChange}
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "40px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Address of the Person Adopting:
              <input
                type="text"
                name="address"
                value={person.address}
                onChange={handleInputChange}
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button type="submit" style={{ padding: "12px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", width: "45%" }}>Save</button>
            <Link to="/person" className="cancel-btn" style={{ padding: "12px 20px", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", textDecoration: "none", textAlign: "center", display: "inline-block", width: "45%", marginLeft: "10px" }}>Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonNew;
