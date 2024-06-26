import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function AdoptionForm() {
  const { id } = useParams();
  const history = useHistory();
  const [adoption, setAdoption] = useState({
    id: "",
    idAnimal: '',
    name: '',
    address: '',
    idPerson: '',
    idVolunteer: '',
    description: ""
  });

  useEffect(() => {
    if (id) {
      axios.get(`/api/adoption/${id}`)
        .then(response => {
          setAdoption(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching!", error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setAdoption({
      ...adoption,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`/api/adoption/${id}`, adoption)
        .then(() => {
          history.push('/adoptions');
        })
        .catch(error => {
          console.error("There was an error updating!", error);
        });
    } else {
      axios.post('/api/adoption', adoption)
        .then(() => {
          history.push('/adoptions');
        })
        .catch(error => {
          console.error("There was an error creating!", error);
        });
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Adoption' : 'Add Adoption'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="id" value={adoption.id} onChange={handleChange} placeholder="Adoption ID" />
        <input type="number" name="idAnimal" value={adoption.idAnimal} onChange={handleChange} placeholder="Animal ID" />
        <input type="text" name="name" value={adoption.name} onChange={handleChange} placeholder="Name of Adopter" />
        <input type="text" name="address" value={adoption.address} onChange={handleChange} placeholder="Address of the Adopter" />
        <input type="number" name="idPerson" value={adoption.idPerson} onChange={handleChange} placeholder="Person ID" />
        <input type="number" name="idVolunteer" value={adoption.idVolunteer} onChange={handleChange} placeholder="Volunteer ID" />
        <input type="text" name="description" value={adoption.description} onChange={handleChange} placeholder="Description" />
        <button type="submit">{id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
}

export default AdoptionForm;
