import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './home.js';
import Resume from './resume.js';
import Chat from './chat.js';
import Signup from './signup.js';
class Content extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/resume' component={Resume}/>
                    <Route exact path='/chat' component={Chat}/>
                    <Route exact path='/signup' component={Signup}/>
                </Switch>            
            </div>
        );
    }
}

export default Content;