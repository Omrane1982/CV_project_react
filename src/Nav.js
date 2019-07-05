import React from 'react';
import {Link,NavLink} from'react-router-dom';
const Nav=()=>{
    return(
        <div className="navbar">
            <div className="container">
            <a href="#" className="logo">Demo Day</a>
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