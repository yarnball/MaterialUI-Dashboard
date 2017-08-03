import React, { Component } from 'react'
import {typography} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import {white} from 'material-ui/styles/colors';
import {BarChart, Bar, ResponsiveContainer, XAxis} from 'recharts';


export default class Home extends Component {
  render () {
  const {iconColor, boxColor } = this.props;
  const monthlySales = [
      {name: 'Jan', uv: 3700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780}
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
      <div style={styles.header}>Yearly Overview</div>
      <div style={styles.div}>
        <ResponsiveContainer>
          <BarChart data={monthlySales} >
            <Bar dataKey="uv" fill={iconColor}/>
            <XAxis dataKey="name" stroke="none" tick={{fill: white}}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Paper>
    )
  }
}