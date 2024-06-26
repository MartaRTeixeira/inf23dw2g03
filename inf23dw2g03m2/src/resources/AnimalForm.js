import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function AnimalForm() {
  const { id } = useParams();
  const history = useHistory();
  const [animal, setAnimal] = useState({
    id: "",
    name: "",
    age: "",
    typeAnimal: "",
    breed: "",
    description: ""
  });

  useEffect(() => {
    if (id) {
      axios.get(`/api/animal/${id}`)
        .then(response => {
          setAnimal(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching!", error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setAnimal({
      ...animal,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`/api/animal/${id}`, animal)
        .then(() => {
          history.push('/animals');
        })
        .catch(error => {
          console.error("There was an error updating!", error);
        });
    } else {
      axios.post('/api/animal', animal)
        .then(() => {
          history.push('/animals');
        })
        .catch(error => {
          console.error("There was an error creating!", error);
        });
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Animal' : 'Add Animal'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="id" value={animal.id} onChange={handleChange} placeholder="Animal ID" />
        <input type="text" name="name" value={animal.name} onChange={handleChange} placeholder="Name of the Animal" />
        <input type="number" name="age" value={animal.age} onChange={handleChange} placeholder="Age of the Animal (in years)" />
        <input type="text" name="typeAnimal" value={animal.typeAnimal} onChange={handleChange} placeholder="Type of Animal" />
        <input type="text" name="breed" value={animal.breed} onChange={handleChange} placeholder="Breed" />
        <input type="text" name="description" value={animal.description} onChange={handleChange} placeholder="Description" />
        <button type="submit">{id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
}

export default AnimalForm;
