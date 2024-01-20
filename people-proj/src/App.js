

import React, { useState, useEffect } from 'react';
import './App.css';

import {Grid} from './Grid.js'

export function App() {

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


  // return { userData, loading };
  };

  useEffect(() => {
    fetchUsers();

  }, []);

  useEffect(() => {
    userData.length ? setLoading(false): setLoading(true);
    console.log("app data", userData, loading);              
  }, [userData, loading]);
    
  // const { userData, loading } = useFetch(URL);

    console.log("app data", userData, loading);              

  return (
    <div className="">
      <header className="">
       <h4>People Project</h4>
      </header>
      
      <div className="container text-center">
        {loading ? (
        <div>Loading...</div>
      ) : ( 
      <Grid userData={userData} />
      )
        }
      </div>
    </div>
  );
}

export default App;
