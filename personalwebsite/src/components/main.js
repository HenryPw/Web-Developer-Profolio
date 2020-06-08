import React from 'react';
import { Route, Switch } from 'react-router-dom';
import  Landingpage  from './landingpage.js';
import  Aboutme  from './aboutme.js';
import  Contact  from './contact.js';
import  Projects  from './projects.js';
import  Resume  from './resume.js';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
    </Switch>
);

export default Main;