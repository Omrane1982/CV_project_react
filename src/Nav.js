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
                <NavLink to="/about">About</NavLink>
                <NavLink to="/Blog">Blog</NavLink>
                <NavLink to="/IMAGE">IMAGE</NavLink>
            </ul>
        </div>
        </div>
    )
}
export default Nav;