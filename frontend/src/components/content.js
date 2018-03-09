import React from 'react';
import {Route,Link} from 'react-router-dom';
import Home from './home.js';
import Resume from './resume.js';
import Chat from './chat.js';
class Content extends React.Component{
    render(){
        return(
            <div>
                <switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/resume' component={Resume}/>
                    <Route exact path='/chat' component={Chat}/>
                </switch>            
            </div>
        );
    }
}

export default Content;