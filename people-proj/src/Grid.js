// "use client"
import React from 'react';
import { useState, useEffect } from 'react';

import {Person} from './person.js'; 

export function Grid({userData}){
 
    let users = []

    const [personsData, setPersonsData] = useState({userData});

    useEffect(() => {
        if ( !userData.length) {
            return
        }
        setPersonsData(userData);
    }, [userData]);               

    if(personsData.length){

        console.log( personsData , "Grid rerender --", userData)

      return (
        personsData.map(user => (  
            <React.Fragment>
            <Person user={user}/>   
         </React.Fragment>
                )     
            )
        )
}
}