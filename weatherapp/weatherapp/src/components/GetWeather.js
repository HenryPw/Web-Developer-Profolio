import React from 'react';
import axios from 'axios';

// personal modules
import WeatherCard from './WeatherCard'

class GetWeather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            wlocation : '',
            value: '',
            temperature: null
        }
        // this.handleChange = this.handleChange.bind
    }

    GetWeather(a) {
        //fetch API
        console.log(a)
        this.setState({
            wlocation: 'HK',
            temperature: 30
        })

    }

    handleChange(event) {
        this.setState({value : event.target.value})
    }


    render() {
        return (
            <div>
                {/* <form> */}
                    <input 
                        onChange={(e)=>this.handleChange(e)}
                        value= {this.state.value}
                        placeholder="Type Something"
                    />
                    <button onClick={()=>{this.GetWeather(123)}}>Submit</button>
                {/* </form> */}
                <WeatherCard
                    data={this.state}
                />
            </div>
        )
    }
}

export default GetWeather;