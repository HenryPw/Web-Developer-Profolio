import React from 'react';
import monster1 from "../monsterpicture/monster1.jpg";

class ClickClickGame extends React.Component {
    constructor() {
        super()
        this.state = {
            clementLife:100
        }
        this.punchClick = this.punchClick.bind(this)
        this.kickballsClick = this.kickballsClick.bind(this)
        this.healClement = this.healClement.bind(this)
    }
    
    punchClick() {
        this.setState((state) => {
            return {
                clementLife: state.clementLife - 1
            }
        })
    }

    kickballsClick() {
        this.setState((state) => {
            return {
                clementLife: state.clementLife - 50
            }
        })
    }


    healClement() {
        this.setState((state) => {
            return {
                clementLife:100
            }
        })
    }

    render() {
        return(
            <div>
                <h1>this is from TTG</h1>
                <clement>
                <img src={monster1} alt="Clement"/>
                <br/>
                This is Clement!
                <br/>
                    <clementLife>
                        Clement Life {this.state.clementLife}
                    </clementLife>
                </clement>
                <br/>
                <button onClick={this.punchClick}>Punch!</button>
                <br/>
                <button onClick={this.kickballsClick}>Kick his balls</button>
                <br/>
                <button onClick={this.healClement}>Heal him so that u can hit him again and again!</button>
                <br/>
            </div>
        )
    }
}

export default ClickClickGame;