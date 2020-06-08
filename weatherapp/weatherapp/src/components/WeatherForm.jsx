import React, { Component } from "react";

class WeatherForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        }
    
        handleChange(e) {
            this.props.location(e.target.value);
        }

    
    render() {
        const location  = this.props.location;
        return (
            <div>
                this is State from WeatherForm!  
                <input 
                    type="text"
                    value={location}
                    onChange={this.handleChange}
                />
            </div>
        )
    }   
}

export default WeatherForm;