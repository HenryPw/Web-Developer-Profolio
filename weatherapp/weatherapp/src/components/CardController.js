import React from 'react';
import WeatherCard from './WeatherCard.js';

class CardContorler extends React.Component {
    render () {
        return (
            <WeatherCard wlocation={this.props.wlocation}/>
            //should be an arry
        )
    }
}

export default CardContorler;