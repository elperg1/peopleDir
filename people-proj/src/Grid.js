// "use client"
import React from 'react';
import { useState, useEffect } from 'react';
import {Person} from './Person.js'

export function Grid({ userData }) {

    const [personsData, setPersonsData] = useState({ userData });

    useEffect(() => {
        if (!userData.length) {
            return
        }
        setPersonsData(userData);
    }, [userData]);

    if (personsData.length) {
       return (
            personsData.map(user => (
                <React.Fragment>
                    <Person user={user} />
                </React.Fragment>
            )
          )
        )
    }
}

export default Grid