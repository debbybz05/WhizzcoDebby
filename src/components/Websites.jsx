import React, { Component } from 'react';
import './../App.css';
import TopTool from './TopTool';
import LeftTool from './LeftTool';
import { Table } from 'react-bootstrap';
import {Link} from 'react-router';

class Websites extends Component {
    render() {
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
                                    <tr>
                                        <td><Link to={"Website/cnn" }>Cnn.com</Link></td>
                                        <td>2,566</td>
                                        <td>189</td>
                                    </tr>
                                    <tr>
                                        <td><Link to={"Website/ynet" }>Ynet.co.il</Link></td>
                                        <td>3,459</td>
                                        <td>329</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Websites;
