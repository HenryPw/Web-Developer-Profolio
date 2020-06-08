import React from "react";
import WeatherForm from "./WeatherForm";
import WeatherMsg from "./WeatherMsg";

class GetWeather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: ""
        };
    }

    onLocationChange(location) {
        this.setState({location: location.value})
    }


    render () {
        const location = this.state.location;
        return (
            <div className="getWeather">
                <p>this is GW{location}</p>
                <WeatherForm onLocationChange={this.location}/>                
                <WeatherMsg/>
            </div>
        )
    }
}

export default GetWeather;