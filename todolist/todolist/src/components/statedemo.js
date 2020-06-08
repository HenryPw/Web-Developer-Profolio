import React from 'react';

class StateDemo extends React.Component {
    constructor() {
        super() 
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.resetClick = this.resetClick.bind(this)
    }
    
    handleClick() {
        this.setState((state) => {
            return {
                count: state.count + 1
            }
        })
    }

    resetClick() {
        this.setState((state) => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>this is from statedemo</h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
                <button onClick={this.resetClick}>Reset to 0</button>
            </div>
        )
    }
    
}

export default StateDemo; 