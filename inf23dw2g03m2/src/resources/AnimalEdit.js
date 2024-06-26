import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../server";

const AnimalEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [animal, setAnimal] = useState({
    id: "",
    name: "",
    age: "",
    typeAnimal: "",
    breed: "",
    description: ""
  });

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const response = await api.get(`/animal/${id}`);
        setAnimal(response.data);
      } catch (error) {
        console.error("Error fetching animal:", error);
      }
    };

    fetchAnimal();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnimal({ ...animal, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/animal/${id}`, animal);
      navigate("/animal");
    } catch (error) {
      console.error("Error updating animal:", error);
    }
  };

  return (
    <div className="animal-edit">
      <h2>Edit Animal</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Animal ID:
          <input type="number" name="id" value={animal.id} onChange={handleInputChange} />
        </label>
        <label>
          Name of the Animal:
          <input type="text" name="name" value={animal.name} onChange={handleInputChange} />
        </label>
        <label>
          Age of the Animal (in years):
          <input type="number" name="age" value={animal.age} onChange={handleInputChange} />
        </label>
        <label>
          Type of Animal:
          <input type="text" name="typeAnimal" value={animal.typeAnimal} onChange={handleInputChange} />
        </label>
        <label>
          Breed:
          <input type="text" name="breed" value={animal.breed} onChange={handleInputChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={animal.description} onChange={handleInputChange} />
        </label>
        <button type="submit">Save</button>
        <Link to="/animals" className="cancel-btn">Cancel</Link>
      </form>
    </div>
  );
};

export default AnimalEdit;