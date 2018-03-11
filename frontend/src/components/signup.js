import React from 'react';
import {Link} from 'react-router-dom';
import Signupwindow from './signupwindow.js';
class Signup extends React.Component{
    render(){
        return(
            <div>
                <Signupwindow/>
                <div className="jumbotron bottombar">
                <span><Link to="chat">signup</Link></span>
                </div>
            </div>
        );
    }
}

export default Signup;