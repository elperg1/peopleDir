import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function PersonDetails() {

    const location = useLocation();

    console.log("person detail data", location);

    const userDetails = location.state.user

    const navigate = useNavigate();
    const toPersonGrid = () => {
        navigate('/');
    }

    const userDob = new Date(userDetails.dob.date)

    return (
        <div className='container p-2 m-2'>
            <h4>Person Details</h4>
            <div className="col-sm-1">
                <img src={userDetails.picture.large} className="img-fluid" alt="user-profile" />
            </div>
            <div className="col-sm-2 pt-1">
                {userDetails.name.first} {userDetails.name.last}
            </div>
            <div className="col-sm-1 pt-1">
                {userDetails.dob.age}
            </div>

            <div className="col-sm-4 pt-1">
                {userDetails.location.street.name}
            </div>

            <div className="col-sm-1 pt-1">
                {userDetails.email}
            </div>

            <div className="col-sm-1 pt-1">
                {userDob.getMonth()}/{userDob.getDate()}
            </div>

            <div className="col-sm-3 pt-1">
                {userDetails.cell}
            </div>

            <div className="col-sm-4 pt-4">
                <a onClick={() => { toPersonGrid() }}>Back to People Grid</a>
            </div>
        </div>

    )
}
