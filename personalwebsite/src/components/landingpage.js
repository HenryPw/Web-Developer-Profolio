import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Landingpage extends Component {
    render() {
        return(
          <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1NwbSLP8zHjQtzQaLNcazaeE4uof2J328q1_0X-J6JrHsd6H&s"  
                    alt="avator"
                    className="avator-img"/>
                    <div className="banner-text">
                        <h1>Front-End Web Developer</h1>
                        <hr/>
                        <p>HTML/CSS | Bootsrtap | React | NodeJS | Express | MongoDB</p>
                        <div className="social-links">

                        {/*Github*/}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github" aria-hidden="true" />
                            </a>
                        {/*Facebook*/}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-facebook-square" aria-hidden="true" />
                            </a>
                        {/*LinkedIn*/}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                            </a>

                        </div>
                    </div>
                </Cell>
            </Grid>
          </div>  
        )
    }
}

export default Landingpage; 