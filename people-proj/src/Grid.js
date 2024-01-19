// "use client"
import React from 'react';
import { Component } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

export function Grid(){
 
    const [personsData, setPersonsData] = useState({});
   
    let userInput = useRef("");

    console.log(  "Grid rerender --", personsData)

    return (

        <div class="container text-center">
        <div class="row">
            <div class="col">
            Column
            </div>
            <div class="col">
            Column
            </div>
            <div class="col">
            Column
            </div>
        </div>
        </div>
    )
}