import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../App.css';
import TopTool from './TopTool';
import LeftTool from './LeftTool';
import { connect } from 'react-redux';
import {getGeneralData} from '../actions/';
import { Panel } from 'react-bootstrap';
import {LineChart, XAxis, YAxis, CartesianGrid, Line} from 'recharts';
import {  PieChart, Pie, Cell  } from 'recharts';


class Dashboard extends Component {

    componentDidMount() {
        let {getGeneralData} = this.props;
        getGeneralData();
    }
    render() {
        let {Imppressisons, Clicks, CTR, eCPM} = this.props;
        const data = [{pv: 2400}, {pv: 1398}, {pv: 9800}, {pv: 3908}, {pv: 4800}, {pv: 4300}];
const data2 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'}    dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
        return (
            <div className="App"> 
                <TopTool/>
                <div className="row">
                    <LeftTool />
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-2">
                                <Panel>
                                    <h4>Imppressisons </h4>
                                    <h4>{Imppressisons}</h4>
                                </Panel>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2">
                                <Panel>
                                    <h4>Clicks </h4>
                                    <h4>{Clicks}</h4>
                                </Panel>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2">
                                <Panel>
                                    <h4>CTR </h4>
                                    <h4>{CTR}</h4>
                                </Panel>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2">
                                <Panel>
                                    <h4>eCPM </h4>
                                    <h4>{eCPM}</h4>
                                </Panel>
                            </div>
                        </div>
                        <div className="row">
                            <LineChart width={600} height={300} data={data}
                                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                <XAxis/>
                                <YAxis/>
                                <CartesianGrid/>
                                <Line dataKey="pv"/> 
                            </LineChart>
                        </div>
                        <div className="row" style = {{'textAlign':'left'}} >
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
                                    <Pie
                                      data={data2} 
                                      cx={300} 
                                      cy={200} 
                                      labelLine={false}
                                      label={renderCustomizedLabel}
                                      outerRadius={80} 
                                      fill="#8884d8"
                                    >
                                        {
                                        data2.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                                      }
                                    </Pie>
                                </PieChart>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <PieChart width={800} height={400}>
                                <Pie data={data2} 
                                    cx={300} 
                                    cy={200} 
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}>
                                    {
                                        data2.map((entry, index) => <Cell key={index} />)
                                    }
                                </Pie>
                            </PieChart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Dashboard.propTypes = {
    Imppressisons: PropTypes.string,
    Clicks: PropTypes.string,
    CTR: PropTypes.string,
    eCPM: PropTypes.string,
    getGeneralData: PropTypes.func
};
const mapStateToProps = (state) => {
   return {  
       Imppressisons: state.dashboard.Imppressisons,
       Clicks: state.dashboard.Clicks,
       CTR: state.dashboard.CTR,
       eCPM: state.dashboard.eCPM
    };
};

export default connect(mapStateToProps,{
    getGeneralData:getGeneralData})(Dashboard);
