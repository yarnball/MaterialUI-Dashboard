import React, { Component } from 'react'
import {typography} from 'material-ui/styles';
import {white} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';


export default class Home extends Component {
  render () {
  const {iconColor, boxColor, data, title } = this.props;
  const styles = {
    paper: {
      backgroundColor: boxColor,
      height: 300
    },
    div: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '95%',
      height: 45,
      paddingLeft: 30,
      color:white,
      lineHeight:2,
    },
    header: {
      color: white,
      backgroundColor: iconColor,
      padding: 10,
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      marginBottom: 20
    }
  };

    return (
      <div>
    <Paper style={styles.paper}>
      <div style={styles.header}> {title} </div>
      <div style={styles.div}>
       <div>{data}</div>
      </div>
    </Paper>
    </div>
    )
  }
}