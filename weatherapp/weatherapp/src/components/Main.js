import React from 'react';
import CardController from "./CardController";
import GetWeather from './GetWeather';

class Main extends React.Component {
   
    render() {
        return (
            <div>               
                <CardController/>
                <GetWeather
                    weatherResult={(result)=>{
                        console.log(result)
                    }}
                />
            </div>
        )
    }
}

export default Main;