import React from 'react';
import AppBar from 'material-ui/AppBar';
import {white, red500, red400} from 'material-ui/styles/colors';

import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import ViewModule from 'material-ui/svg-icons/action/view-module';


class Header extends React.Component {

  render() {
    const style = {
      appBar: {
        position: 'fixed',
        top: -4,
        overflow: 'hidden',
        maxHeight: 57,
        backgroundColor:red500,
        color:white,
      },
      menuButton: {
        marginLeft: 10
      },
      iconsRightContainer: {
        marginLeft: 10,
        marginTop:10,
        color:white
      }
    };

    return (
        <div>
          <AppBar
              style={style.appBar}
              title={<SearchBox />}
              iconElementRight={
                <div style={style.iconsRightContainer}>
              <ViewModule color={white} />
                </div>
              }
            />

        </div>
      );
  }
}

class SearchBox extends React.Component {

  render() {
  const styles = {
    iconButton: {
      float: 'left',
      paddingTop: 17
    },
    textField: {
      color: white,
      backgroundColor: red400,
      borderRadius: 2,
      height: 25,
      paddingTop:10,
    },
    inputStyle: {
      color: white,
      paddingLeft: 5,
      bottom:5,
    },
    hintStyle: {
      height: 16,
      paddingLeft: 5,
      color: white
    }
  };
    return (
        <div>
      <IconButton style={styles.iconButton} >
        <Search color={white} />
      </IconButton>
          <TextField
            hintText="Search..."
            underlineShow={false}
            fullWidth={true}
            style={styles.textField}
            inputStyle={styles.inputStyle}
            hintStyle={styles.hintStyle}
          />

        </div>
      );
  }
}




export default Header;
