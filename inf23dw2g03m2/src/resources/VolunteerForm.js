import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

function VolunteerForm() {
  const { id } = useParams();
  const history = useHistory();
  const [volunteer, setVolunteer] = useState({
    id: '',
    name: '',
    phoneNumber: '',
    address: ""
  });

  useEffect(() => {
    if (id) {
      axios.get(`/api/volunteer/${id}`)
        .then(response => {
          setVolunteer(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching!", error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setVolunteer({
      ...volunteer,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`/api/volunteer/${id}`, volunteer)
        .then(() => {
          history.push('/volunteers');
        })
        .catch(error => {
          console.error("There was an error updating!", error);
        });
    } else {
      axios.post('/api/volunteer', volunteer)
        .then(() => {
          history.push('/volunteers');
        })
        .catch(error => {
          console.error("There was an error creating!", error);
        });
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Volunteer' : 'Add Volunteer'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="id" value={volunteer.id} onChange={handleChange} placeholder="Volunteer ID" />
        <input type="text" name="name" value={volunteer.name} onChange={handleChange} placeholder="Name of the Volunteer" />
        <input type="text" name="phoneNumber" value={volunteer.phoneNumber} onChange={handleChange} placeholder="Phone Number of the Volunteer" />
        <input type="text" name="address" value={volunteer.address} onChange={handleChange} placeholder="Address of the Volunteer" />
        <button type="submit">{id ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
}

export default VolunteerForm;
