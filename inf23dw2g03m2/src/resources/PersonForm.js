import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function PersonForm() {
  const { id } = useParams();
  const history = useHistory();
  const [person, setPerson] = useState({
    id: '',
    name: '',
    phoneNumber: '',
    address: ''
  });

  useEffect(() => {
    if (id) {
      axios.get(`/api/person/${id}`)
        .then(response => {
          setPerson(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching!", error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`/api/person/${id}`, person)
        .then(() => {
          history.push('/persons');
        })
        .catch(error => {
          console.error("There was an error updating!", error);
        });
    } else {
      axios.post('/api/person', person)
        .then(() => {
          history.push('/persons');
        })
        .catch(error => {
          console.error("There was an error creating!", error);
        });
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Person' : 'Add Person'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="id" value={person.id} onChange={handleChange} placeholder="Person ID" />
        <input type="text" name="name" value={person.name} onChange={handleChange} placeholder="Name of the Person Adopting" />
        <input type="text" name="phoneNumber" value={person.phoneNumber} onChange={handleChange} placeholder="Phone Number of the Person Adopting" />
        <input type="text" name="address" value={person.address} onChange={handleChange} placeholder="Address of the Person Adopting" />
        <button type="submit">{id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
}

export default PersonForm;
