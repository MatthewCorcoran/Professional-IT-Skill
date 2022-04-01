import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <nav className="navbar navbar-expand-ig navbar-light primary-gradient shadow ">
              < Link to='#' className="nav-link brand mx-auto">
                    <h5 classname = "text-light m-0"> M&C Clothing</h5>
              </Link>
              <button className="navbar-toggler" type="button" data-toggle = "collapse" data-target="#navbarNav" aria-expanded = "false">
                  <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id = "navbarNav">
                   <div className="me-auto"></div>
                    <ul className="navbar-nav">
                        <li className="nav-item acive">
                            Logout 
                        </li>
                    </ul>
              </div>

            </nav>
        </header>
    )
}