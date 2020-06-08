import React, { Component } from "react";

class Nav extends Component {
    render () {
        return (
            <div className="Nav">
                <ul>
                    <li className="liName">Henry Ma</li>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#clients">Our Clients</a></li>  
                    <li><a href="#contact">Contact Us</a></li>
                    <br/>
                </ul>
           </div>
        )
    }
}

export default Nav;





