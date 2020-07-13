import React from 'react';
import cloud from './img/cloud.png';

class WeatherCard extends React.Component {
    render() {
        console.log(this.props)
        //Cards display 
        return (
            <div className="card">
                <div className="location">
                    <h1 className="city">{this.props.wlocation}</h1>
                    {/* <h3 className="country">AU</h3> */}
                </div>            
                    <img src={cloud} alt="weather icon" className="icon"/>
                    <h1 className="temp">{this.props.temperature} C</h1>
                    <h3 className="condition">Sunny</h3>
            </div>
        );
    }
}
export default WeatherCard;
