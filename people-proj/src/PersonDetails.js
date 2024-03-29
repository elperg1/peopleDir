import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const LocationDisplay = () => {
    
    // return userDetails
  }

export default function PersonDetails() {

    const navigate = useNavigate();
    const toPersonGrid = () => {
        navigate('/');
    }

    const location = useLocation();
    const userDetails = location.state.user

    const userDob = new Date(userDetails.dob.date)

    console.log(userDetails,"person detail data", location);

    return (
        <div className='container p-2 m-2'>
            <h4>Person Details</h4>
            <div className="col-sm-1">
                <img src={userDetails.picture.large} className="img-fluid" alt="user-profile" />
            </div>
            <div className="col-sm-2 pt-2">
                name: {userDetails.name.first} {userDetails.name.last}
            </div>
            <div className="col-sm-1 pt-2">
                age: {userDetails.dob.age}
            </div>

            <div className="col-sm-5 pt-2">
                address: {userDetails.location.street.number} {userDetails.location.street.name}
                , &nbsp;
                 { userDetails.location.city} {userDetails.location.country}
                , &nbsp;
                 { userDetails.location.postcode}
            </div>

            <div className="col-sm-1 pt-2">
                {userDetails.email}
            </div>

            <div className="col-sm-1 pt-2">
                dob: {userDob.getMonth()}/{userDob.getDate()}
            </div>

            <div className="col-sm-3 pt-2">
                phone: {userDetails.cell}
            </div>

            <div className="col-sm-4 pt-4">
                <a class="pe-auto" onClick={() => { toPersonGrid() }}>Back to People Grid</a>
            </div>

        </div>

    )
}
