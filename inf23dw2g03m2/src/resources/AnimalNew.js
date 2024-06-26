import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../server";

const AnimalNew = () => {
  const navigate = useNavigate();
  const [animal, setAnimal] = useState({
    id: "",
    name: "",
    age: "",
    typeAnimal: "",
    breed: "",
    description: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnimal({ ...animal, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/animal", animal);
      navigate("/animal");
    } catch (error) {
      console.error("Error creating animal:", error);
    }
  };

  return (
    <div className="animal-new" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
      <div style={{ width: "400px", textAlign: "center" }}>
        <h2>New Animal</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Animal ID:
              <input
                type="number"
                name="id"
                value={animal.id}
                onChange={handleInputChange}
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Name of the Animal:
              <input
                type="text"
                name="name"
                value={animal.name}
                onChange={handleInputChange}
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Age of the Animal (in years):
              <input
                type="number"
                name="age"
                value={animal.age}
                onChange={handleInputChange}
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Type of Animal:
              <input
                type="text"
                name="typeAnimal"
                value={animal.typeAnimal}
                onChange={handleInputChange}
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "40px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Breed:
              <input
                type="text"
                name="breed"
                value={animal.breed}
                onChange={handleInputChange}
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "40px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Description:
              <input
                type="text"
                name="description"
                value={animal.description}
                onChange={handleInputChange}
                style={{ marginLeft: "10px" }}
              />
            </label>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button type="submit" style={{ padding: "12px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", width: "45%" }}>Save</button>
            <Link to="/animal" className="cancel-btn" style={{ padding: "12px 20px", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", textDecoration: "none", textAlign: "center", display: "inline-block", width: "45%", marginLeft: "10px" }}>Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AnimalNew;
