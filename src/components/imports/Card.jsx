import React from 'react';
import { NavLink } from "react-router-dom";
//import LoginForm from './LoginForm';

const Card = ({ 
    imgsrc,
    title
}) => {

    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={imgsrc} className="card-img-top" id="coverImg" alt="card" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">Check out our new shock just click the button below.</p>
                        <NavLink to= "maleDepartment" className="btn btn-primary">Go to Page</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;