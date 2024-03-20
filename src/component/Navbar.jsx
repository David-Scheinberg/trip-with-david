import React from 'react';
import { MenuItems } from "./MenuItems"
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../style/Style.css"
import { NavLink } from 'react-router-dom';



const Navbar = (props) => {
    return (




        <div className="nav justify-content-center">
            <nav className="px-3 navbar navbar-expand-lg bg-secondary w-100">
              <NavLink className="nav-link" to="/"> <h1 className="navbar-brand">Trip</h1></NavLink> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse  navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto me-auto mb-2 mb-lg-0 ">
                        {MenuItems.map((item, index) => {
                            return (
                                <li className='nav-item' key={index}>
                                    <NavLink className='nav-link ' to={item.url}>
                                        {item.title}
                                    </NavLink>
                                </li>
                            )
                        })}

                    </ul>

                </div>

            </nav>
        </div>



    );
};

export default Navbar;
