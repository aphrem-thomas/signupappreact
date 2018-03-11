import React from 'react';
import SignIn from './signin.js';
import {Link} from 'react-router-dom';


class Chat extends React.Component{
    render(){
        return(
            <div>
                <SignIn/>
                <div className="jumbotron bottombar">
                if you are not signed up,
                <span><Link to="signup">signup</Link></span>
                </div>
            </div>
        );
    }
}

export default Chat;