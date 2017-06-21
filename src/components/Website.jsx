import React, { Component } from 'react';
import './../App.css';
import TopTool from './TopTool';
import LeftTool from './LeftTool';
import { Table } from 'react-bootstrap';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,} from 'recharts';

class Website extends Component {
    componentDidMount() { 
        const websiteKeyFromRouteParams=this.props.params.key;
        console.log(websiteKeyFromRouteParams)
    }

    render() {
        const data = [
              {name: 'Impressions', uv: 2566, amt: 2400},
              {name: 'Clicks', uv: 189, amt: 2210}
        ];
        return (
            <div className="App"> 
                <TopTool/>
                <div className="row">
                    <LeftTool />
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="row" style = {{'textAlign':'left'}}>
                            <h2> Cnn.com </h2>
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
                                    <tr>
                                        <td><a>Nike</a></td>
                                        <td>2566</td>
                                        <td>189</td>
                                    </tr>
                                    <tr>
                                        <td><a>Coca Cola</a></td>
                                        <td>3,459</td>
                                        <td>329</td>
                                    </tr>
                                    <tr>
                                        <td><a>Lotto</a></td>
                                        <td>2566</td>
                                        <td>189</td>
                                    </tr>
                                    <tr>
                                        <td><a>Wix</a></td>
                                        <td>2566</td>
                                        <td>189</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="row" style = {{'textAlign':'left'}}>
                            <div className="row">
                                <h3>Nike</h3>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Website;
