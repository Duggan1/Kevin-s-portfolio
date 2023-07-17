import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
<div className="navLink header" >
                    <NavLink
                        exact
                        to="/"
                        className="hbl"
                        
                        activeStyle={{
                            background: "white",}}
                    >
                        Home
                    </NavLink>
                   
                    <NavLink
                        exact to="/projects"
                        id="shorty"
                        className="hbl"
                        activeStyle={{
                            background: "white",textOverflow: "clip"}}
                    >
                        Projects
                    </NavLink>
                   
                    
                    <NavLink
                        exact to="/experience"
                        className="hbl"
                        activeStyle={{
                            background: "white",}}
                        
                    >
                        Experience
                    </NavLink>
                    <NavLink
                        exact to="/about"
                        className="hbl"
                        
                        activeStyle={{
                            background: "white",}}
                        
                    >
                        About Kevin 
                    </NavLink>
                   

                </div>


            
        
);
}

export default Header;