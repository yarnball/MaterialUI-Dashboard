import React, { Component } from 'react'
import {typography} from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import {AreaChart, Area, ResponsiveContainer } from 'recharts';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import {purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';


export default class Home extends Component {
  render () {
  // const {iconColor, boxColor } = this.props;
  const browserUsage = [
      {name: 'This week', value: 300, color: purple600, icon: <ExpandLess/>}
    ];
  const styles = {
    paper: {
      minHeight: 344,
      padding: 10
    },
    legend: {
      paddingTop: 20,
    },
    pieChartDiv: {
      height: 290,
      textAlign: 'center'
    },
    title:{
    fontSize: 24,
    fontWeight: typography.fontWeightLight,
    marginBottom: 20
    },
    clear: {
      clear: 'both'
    }
  };
const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
    return (
<Paper style={styles.paper}>
      <span style={styles.title}>Waves</span>

      <div style={styles.clear}/>

      <div className="row">

        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
          <div style={styles.pieChartDiv}>
            <ResponsiveContainer>

      <AreaChart width={200} height={60} data={data}
            margin={{top: 5, right: 0, left: 0, bottom: 5}}>
        <Area type='monotone' dataKey='uv' stroke='#8884d8' fill={purple600} />
      </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <div style={styles.legend}>
            <div style={styles.legend}>
              <List>
                {browserUsage.map((item) =>
                  <ListItem
                    key={item.name}
                    leftAvatar={
                      <Avatar icon={item.icon}
                              backgroundColor={item.color}/>
                    }>
                    {item.name}
                  </ListItem>
                )}
              </List>
            </div>
          </div>
        </div>
      </div>
    </Paper>
    )
  }
}