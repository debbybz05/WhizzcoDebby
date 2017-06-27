import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { withRouter } from 'react-router';

class LeftTool extends Component {
    constructor(props){
        super(props);
        this.handleClickButton = this.handleClickButton.bind(this);
    }

    render() {
       return (
            <div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <ButtonGroup vertical>
                        <Button bsSize="lg" onClick={(e) => this.handleClickButton(e,"Dashboard")} >Dashboard</Button>
                        <Button bsSize="lg" onClick={(e) => this.handleClickButton(e,"Websites")} >Websites</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
    handleClickButton(event,value){
        event.preventDefault();
        switch  (value) {
        case "Dashboard":
            this.props.router.push('/Dashboard');
        break;
        case "Websites":
            this.props.router.push('/Websites');
        break
        default:
            this.props.router.push('/');
        }
    }
}

export default withRouter(LeftTool);
