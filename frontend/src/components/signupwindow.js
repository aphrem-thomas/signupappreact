import React from 'react';
import $ from 'jquery';

class Signupwindow extends React.Component{

    constructor(props){
        super(props);
        this.onsubmit=this.onsubmit.bind(this);
    }
    onsubmit(e){
        e.preventDefault();
        let pwd1=$("#signuppassword1").val();
        let pwd2=$("#signuppassword2").val();
        if(pwd1===pwd2){
        console.log("password matched");
        }
    }

    render(){

        return(
            <div  className="signwindow border border-primary">
                
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="signuppassword1" placeholder="Password"/>
                    </div>

                     <div className="form-group">
                        <label htmlFor="exampleInputPassword2">Re-enter Password</label>
                        <input type="password" className="form-control" id="signuppassword2" placeholder="Password"/>
                    </div>
                           
                    <button type="submit" className="btn btn-primary" onClick={this.onsubmit}>Submit</button>
                </form>
               
            </div>
           
        );
    }
}

export default Signupwindow;