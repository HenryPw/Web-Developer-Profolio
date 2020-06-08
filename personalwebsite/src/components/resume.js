import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
    render() {
        return(
          <div className="resume-body">
            <Grid className="resume-grid">
              <Cell col={5}>
                <h2>PakWing</h2>
              </Cell>
              <Cell col={7}>
                <h2>Employment History</h2>
              </Cell>
              <Cell col={1}> 1 </Cell>
              <Cell col={1}> 1 </Cell>
              <Cell col={1}> 1 </Cell>
              <Cell col={1}> 1 </Cell>
            </Grid>
            
              
           
          </div>  
        )
    }
}

export default Resume; 