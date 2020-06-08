import React, { Component } from 'react';
import Nav from "./Nav"
import GetWeather from "./GetWeather"

class Main extends Component {
    render () {
        return (
            <div>
                <Nav/>
                <br/>
                <GetWeather/>
            </div>
        )
    }
}

export default Main;