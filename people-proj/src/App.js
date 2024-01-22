import React, { useState, useEffect } from 'react';
import './App.css';

import { Grid } from './Grid.js'
import { Person } from './Person.js'

import PersonDetails from './PersonDetails.js'

export default function App() {

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {

    const url = 'https://randomuser.me/api/?results=10';

    let response = await fetch(url);
    let dataResponse = await response.json();

    const users = dataResponse.results;

    setUserData(users);
    setLoading(false);

  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    userData.length ? setLoading(false) : setLoading(true);
  }, [userData, loading]);

  console.log("app data", userData, loading);

  return (
    <div className="container">
      <header >
        <h4>People Project</h4>
      </header>

      <div className="container text-center">
        {loading ? (
          <div className="m-2">Loading...</div>
        ) : (
          <Grid userData={userData} />
        )
        }
      </div>
    </div>
  )
}
<PersonDetails />


