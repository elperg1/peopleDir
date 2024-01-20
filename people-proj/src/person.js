import React from 'react';
import { Component } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

export function Person({user}){

    const name = user.name
    console.log("Person rerender --", name)

    return (
        <div className="container">
  <div className="row">
    <div className="col">
        <img src={user.picture.thumbnail} className="img-fluid" alt="profile-image"/>
    </div>
    <div className="col">
    Name: {name.first} {name.last}
    </div>
    <div className="col">
    Age: {user.dob.age}
    </div>
    <div className="col">
     City: {user.location.city}
    </div>

  </div>
  
</div>
   
    )
}