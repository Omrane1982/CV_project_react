import React from 'react';
import {NavLink} from'react-router-dom';
const Nav=()=>{
    return(
        <div className="navbar">
            <div className="container">
            <a href="https://gomycode.tn" target="_blank" rel="noopener noreferrer" className="logo">React Js Project</a>
            <ul>
                <NavLink exact to="/">Home</NavLink>
                <NavLink  to="/CV">CV</NavLink>
                <NavLink to="/Wheather">Wheather</NavLink>
                <NavLink to="/Blog">Blog</NavLink>
                
            </ul>
        </div>
        </div>
    )
}
export default Nav;