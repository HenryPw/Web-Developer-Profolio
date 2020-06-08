import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
          <div className="contact-body">
            <Grid className="contact-grid">
              <Cell col={6}> 
                <h2>Pak Wing Ma</h2>
                <img
                 src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" 
                 alt="avatar" 
                 style={{height:'250px'}}
                />
                <p style={{ width: '750px', margin: 'auto' , paddingTop: '1em' }}>hello ha</p>
              </Cell>
              <Cell col={6}> 
                <h2>Contact Me</h2>
                <hr/>

                <div className="contact-list">
                <List>
                  <ListItem>
                      <ListItemContent icon="phone" style={{ fontSize: '25px' , fontFamily : 'Anton' }}>+852 68299062</ListItemContent>
                    </ListItem>
                  <ListItem>
                      <ListItemContent icon="email" style={{ fontSize: '25px' , fontFamily : 'Anton' }}>pwky122@icloud.com</ListItemContent>
                    </ListItem>
                  <ListItem>
                      <ListItemContent icon="web" style={{ fontSize: '25px' , fontFamily : 'Anton' }}>GitHub.com/HenryPw</ListItemContent>
                    </ListItem>
                  </List>
                </div>
                
              </Cell>
            </Grid>
          </div>
        
        )
    }
}

export default Contact; 