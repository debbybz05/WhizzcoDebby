import React, { Component } from 'react';
import logo from './../logo.png';
import { Modal, Button } from 'react-bootstrap';

class TopTool extends Component {
    constructor(props){
        super(props);
        this.clickLogIn = this.clickLogIn.bind(this);
        this.close = this.close.bind(this);
        this.logIn = this.logIn.bind(this);
        this.state={showModal:false, error:false};
    }

    render() {
       return (
            <div>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Log In:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p> Enter your email and password </p>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <label>
                                <input ref="email" placeholder="email" defaultValue="debbybz05@gmail.com" />
                            </label>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8" style = {{'textAlign':'right'}}>
                            <label>
                                <input ref="pass" placeholder="password" />
                            </label> (hint: 1234)
                        </div>
                        {this.state.error && (
                            <p style = {{'color':'red'}}>Bad login information</p>
                        )}
                        <br />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.logIn}>Log In</Button>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <div className="row">
                    <div className="col-lg-1 col-md-1 col-sm-1" />
                    <div className="col-lg-8 col-md-8 col-sm-8" style = {{'textAlign':'left'}} >
                        <img src={logo} width={100} alt="logo"/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <a onClick={this.clickLogIn}>Log in</a> / <a>Log out</a>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
    clickLogIn(){
        console.log("clickLogIn");
        this.setState({ showModal: true});
    }
    logIn(){
        console.log("logIn");
        this.setState({ error: true});
        //this.setState({ showModal: false});
    }
    close(){
        console.log("Close");
        this.setState({ showModal: false});
    }
}

export default TopTool;
