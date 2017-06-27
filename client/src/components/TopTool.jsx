import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchLogin, logout, setError} from '../actions/';
import logo from './../logo.png';
import { Modal, Button } from 'react-bootstrap';

class TopTool extends Component {
    constructor(props){
        super(props);
        this.clickLogIn = this.clickLogIn.bind(this);
        this.clickLogOut = this.clickLogOut.bind(this);
        this.close = this.close.bind(this);
        this.logIn = this.logIn.bind(this);
        this.state={showModal:false, error:false, needClose:false};
    }
    componentWillUpdate(nextProps, nextState){
        let {setError} = this.props;
        if((nextState.needClose)&&(!nextProps.error)){
            setError();
            this.setState({ needClose: false});
            this.setState({ showModal: false});
        }
    }

    render() {
        let {isLogin, error} = this.props;
        /*if((this.state.needClose)&&(!error)){
            setError();
            this.setState({ needClose: false});
            this.setState({ showModal: false});
        }*/
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
                        {error && (
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
                        <a onClick={this.clickLogIn}>Log in</a> / <a onClick={this.clickLogOut}>Log out</a>
                    </div>
                    {
                        isLogin
                        ?<div className="col-lg-3 col-md-3 col-sm-3">
                            you are logIn (:
                        </div>
                        :<div className="col-lg-3 col-md-3 col-sm-3">
                            you are not logIn ):
                        </div>
                    }
                </div>
                <hr/>
            </div>
        );
    }
    clickLogIn(){
        let {isLogin}= this.props;
        if(!isLogin)
            this.setState({ showModal: true});
    }
    clickLogOut(){
        let {logout} =this.props;
        logout();
    }
    logIn(){
        let {login}= this.props;
        let email=(this.refs.email.value? this.refs.email.value : this.refs.email.defaultValue);
        let password=this.refs.pass.value;
        let requestParams={email:email,password:password};
        fetchLogin(requestParams)
        this.setState({ needClose: true});
    }
    close(){
        let {setError}=this.props;
        setError();
        this.setState({ showModal: false});
    }
}
TopTool.propTypes = {
    login: PropTypes.func,
    isLogin: PropTypes.bool,
    error: PropTypes.string,
    logout: PropTypes.func,
    setError: PropTypes.func
};
const mapStateToProps = (state) => {
    return {  
      isLogin: state.toolBar.isLogin,
      error: state.toolBar.error
    };
};

export default connect(mapStateToProps,{
    login:fetchLogin,
    logout:logout,
    setError:setError})(TopTool);
