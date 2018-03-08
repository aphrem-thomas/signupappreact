import React from 'react';
import Navbar from './navbar.js';
import Content from './content.js';


class Main extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Content/>
            </div>
        );
    }
}

export default Main;