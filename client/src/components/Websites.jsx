import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../App.css';
import TopTool from './TopTool';
import LeftTool from './LeftTool';
import { Table } from 'react-bootstrap';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import {getWebsites} from '../actions/';

class Websites extends Component {
    componentDidMount() {
        let {getWebsites} = this.props;
        getWebsites();
    }

    render() {
        let {websites} = this.props;
        return (
            <div className="App"> 
                <TopTool/>
                <div className="row">
                    <LeftTool />
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="row" style = {{'textAlign':'left'}}>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Website</th>
                                        <th>Impressions</th>
                                        <th>Clicks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    websites
                                    ?websites.map( (web) => { 
                                        return (
                                            <tr>
                                                <td><Link to={"Website/"+web.key} >{web.name}</Link></td>
                                                <td>{web.Impressions}</td>
                                                <td>{web.Clicks}</td>
                                            </tr>
                                        );
                                            
                                    })
                                    :null

                                }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Websites.propTypes = {
    websites: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string,
        Impressions: PropTypes.string,
        Clicks: PropTypes.string
    })),
    getWebsites: PropTypes.func
};
const mapStateToProps = (state) => {
   return {  
       websites: state.websites.websites
    };
};

export default connect(mapStateToProps,{
    getWebsites:getWebsites})(Websites);
