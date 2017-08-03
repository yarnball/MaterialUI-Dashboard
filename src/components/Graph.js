import React, { Component } from 'react'
import {typography} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import {white} from 'material-ui/styles/colors';
import {LineChart, Line, ResponsiveContainer} from 'recharts';


export default class Home extends Component {
  render () {
  const {iconColor, boxColor } = this.props;
    const newOrders =    [
      {pv: 2400},
      {pv: 1398},
      {pv: 9800},
      {pv: 3908},
      {pv: 4800},
      {pv: 3490},
      {pv: 4300}
    ];
  const styles = {
    paper: {
      backgroundColor: boxColor,
      height: 150
    },
    div: {
      height: 95,
      padding: '5px 15px 0 15px'
    },
    header: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      color: white,
      backgroundColor: iconColor,
      padding: 10,
    }
  };

    return (
    <Paper style={styles.paper}>
      <div style={styles.header}>Recent Orders</div>
      <div style={styles.div}>
        <ResponsiveContainer >
          <LineChart data={newOrders}>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
    )
  }
}