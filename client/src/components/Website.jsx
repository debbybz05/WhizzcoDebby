import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../App.css';
import TopTool from './TopTool';
import LeftTool from './LeftTool';
import { Table } from 'react-bootstrap';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,} from 'recharts';
import { connect } from 'react-redux';
import {getWebsite} from '../actions/';

class Website extends Component {
    constructor(props){
        super(props);
        this.onClickCampaign=this.onClickCampaign.bind(this);
        this.state={currentCampaignName:null, currentImpressions:null, currentClicks:null}
    }
    componentDidMount() { 
        const websiteKeyFromRouteParams=this.props.params.key;
        let {getWebsite} = this.props;
        getWebsite(websiteKeyFromRouteParams);
    }

    render() {
        let {campaigns, websiteKey} = this.props;
        let currentImpressions = parseInt(this.state.currentImpressions,10);
        let currentClicks = parseInt(this.state.currentClicks,10);
        const data = [
              {name: 'Impressions', uv: currentImpressions},
              {name: 'Clicks', uv: currentClicks}
        ];
        return (
            <div className="App"> 
                <TopTool/>
                <div className="row">
                    <LeftTool />
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="row" style = {{'textAlign':'left'}}>
                            <h2> {websiteKey} </h2>
                        </div>
                        <div className="row" style = {{'textAlign':'left'}}>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Campaign</th>
                                        <th>Impressions</th>
                                        <th>Clicks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    campaigns
                                    ?campaigns.map( (Campaign) => { 
                                        return (
                                            <tr>
                                                <td><a onClick={(e) => this.onClickCampaign(e,Campaign.name,Campaign.Impressions,Campaign.Clicks)}>{Campaign.name}</a></td>
                                                <td>{Campaign.Impressions}</td>
                                                <td>{Campaign.Clicks}</td>
                                            </tr>
                                        );
                                            
                                    })
                                    :null

                                }
                                </tbody>
                            </Table>
                        </div>
                        {

                            this.state.currentCampaignName
                            ?<div className="row" style = {{'textAlign':'left'}}>
                                <div className="row">
                                    <h3>{this.state.currentCampaignName}</h3>
                                    <BarChart width={500} height={250} data={data}
                                        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                        <XAxis dataKey="name"/>
                                        <YAxis/>
                                        <CartesianGrid strokeDasharray="3 3"/>
                                        <Tooltip/>
                                        <Bar dataKey="pv" fill="#8884d8" />
                                        <Bar dataKey="uv" fill="#82ca9d" />
                                    </BarChart>
                                </div>
                            </div>
                            :null
                        }
                       
                    </div>
                </div>
            </div>
        );
    }
    onClickCampaign(event,name,Impressions,Clicks){
        event.preventDefault();
        this.setState({currentCampaignName:name, 
            currentImpressions:Impressions, 
            currentClicks:Clicks})
    }
}
Website.propTypes = {
    websiteKey: PropTypes.string,
    campaigns: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        Impressions: PropTypes.string,
        Clicks: PropTypes.string
    })),
    getWebsite: PropTypes.func
};
const mapStateToProps = (state) => {
   return {  
       websiteKey: state.website.key,
       campaigns: state.website.campaigns
    };
};

export default connect(mapStateToProps,{
    getWebsite:getWebsite})(Website);
