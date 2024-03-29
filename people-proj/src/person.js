import React from 'react';

import { useNavigate } from 'react-router-dom';

export function Person({ user }) {

    const name = user.name

    console.log("Person rerender --", user)

    const navigate = useNavigate();

    const toPersonDetails = () => {
        navigate('/PersonDetails', { state: { user } });
    }

    return (

        <div className="container">

            <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" onClick={() => { toPersonDetails() }}>

                <div className="row person-row m-1 p-1" data-testid="row-element">
                    <div className="col-sm-1">
                        <img src={user.picture.thumbnail} className="img-fluid" alt="user-profile" />
                    </div>
                    <div className="col-sm-3 pt-1">
                        {name.first} {name.last}
                    </div>
                    <div className="col-sm-1 pt-1">
                        {user.dob.age}
                    </div>
                    <div className="col-sm-3 pt-1">
                        {user.location.city}
                    </div>

                </div>
            </a>

        </div>

    )
}

export default Person