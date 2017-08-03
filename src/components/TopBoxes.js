import React, { Component } from 'react'
import {typography} from 'material-ui/styles';
import {white} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';

export default class Home extends Component {
  render () {
  const {title, value, iconColor, boxColor, prefix} = this.props;
  const Icon = this.props.Icon
// NOTE: When passing a funciton (IE the Icon) then must use a capital where passing it as a prop.
  const styles = {
        content: {
          padding: '5px 10px',
          marginLeft: 80,
          height: 60,
          backgroundColor:boxColor,
        },
        text: {
          fontSize: 15,
          fontWeight: typography.fontWeightLight,
          lineHeight:1.7,
          color: white
        },
        number: {
          display: 'block',
          fontWeight: typography.fontWeightMedium,
          fontSize: 18,
          lineHeight:1.5,
          color: white
        },
        iconSpan: {
          float: 'left',
          height: 70,
          width: 80,
          textAlign: 'center',
          backgroundColor:iconColor
        },
        icon: {
          height: 38,
          width: 38,
          marginTop: 15,
          maxWidth: '100%',
          color:white
        },
        prefix: {
          fontWeight: typography.fontWeightMedium,
          fontSize: 12,
          marginRight:1,
          color: white,
          // verticalAlign:'top',
          position: 'relative',
          bottom:3.5,
        },
  };
    return (
      <Paper>
        <span style={styles.iconSpan}>
            <Icon style={styles.icon} />
        </span>

        <div style={styles.content}>
          <span style={styles.text}>{title}</span>
          <span style={styles.number}> 
          {prefix &&
          <span style={styles.prefix}> {prefix}</span>
}
          {value}</span>
        </div>
      </Paper>
    )
  }
}