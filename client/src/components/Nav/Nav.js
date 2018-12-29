import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = props => {
    return(
        <div className="da-navs my-1">
            <ul className="nav nav-cust">
                <li className="nav-item li-item-cust">
                    <Link
                        to="/"
                        className={
                            window.location.pathname === "/" ? "nav-link active" : "nav-link inactive"
                        }
                        id={
                            window.location.pathname === "/" ? "active-cust" : ""
                        }
                    >
                        Mach1
                    </Link>
                </li>
                <li className="nav-item li-item-cust align-items-center">
                    <Link
                        to="/mach2"
                        className={
                            window.location.pathname === "/mach2" ? "nav-link active" : "nav-link inactive"
                        }
                        id={
                            window.location.pathname === "/mach2" ? "active-cust" : ""
                        }
                    >
                        Mach2
                    </Link>
                </li>
                <li className="nav-item li-item-cust align-items-center">
                    <Link
                        to="/mach3"
                        className={
                            window.location.pathname === "/mach3" ? "nav-link active" : "nav-link inactive"
                        }
                        id={
                            window.location.pathname === "/mach3" ? "active-cust" : ""
                        }
                    >
                        Mach3
                    </Link>
                </li>
                <li className='text-dark'>
                    Page starts below this bar
                </li>
                
            </ul>

        </div>
    )
};