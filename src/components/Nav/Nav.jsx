import React from "react";

import "./Nav.css";

import { Outlet, Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li className="button">
                    <Link to="/">Currículo</Link>
                </li>
                <li className="button">
                    <Link to="/portfolio">Portfólio</Link>
                </li>
                <li className="button">
                    <Link to="/contato">Contato</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
