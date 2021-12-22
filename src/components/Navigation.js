import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/navigation.css"

const Navigation = () => {
    return (
        <div className="navigation">
             <NavLink  to="/" activeClassName="lien-active" className="lien">Accueil</NavLink>
             <NavLink  to="/about"activeClassName="lien-active"className="lien">About</NavLink>
        </div>
       

    );
};

export default Navigation;