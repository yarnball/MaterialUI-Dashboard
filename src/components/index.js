import React, { Component } from "react";
import { Route, BrowserRouter, Link, Redirect, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Header from "./Header";
import Dashboard from "./protected/Dashboard";
import { logout } from "../helpers/auth";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { blue600, grey900 } from "material-ui/styles/colors";

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true
          ? <Component {...props} />
          : <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />}
    />
  );
}

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false
          ? <Component {...props} />
          : <Redirect to="/dashboard" />}
    />
  );
}

export default class App extends Component {
  state = {
    authed: true,
    loading: false
  };
  render() {
    const themeDefault = getMuiTheme({
      palette: {},
      appBar: {
        height: 57,
        color: blue600
      },
      drawer: {
        width: 230,
        color: grey900
      },
      raisedButton: {
        primaryColor: blue600
      }
    });

    return this.state.loading === true
      ? <h1>Loading</h1>
      : <BrowserRouter>
          <div>
            <MuiThemeProvider style={themeDefault}>
              <div>
                <Header />
                <nav>
                  <div className="hidden">
                    <div>
                      <Link to="/">React Router + Firebase Auth</Link>
                    </div>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      {this.state.authed
                        ? <div>
                            <li>
                              <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                              <Link
                                to="/"
                                onClick={() => {
                                  logout();
                                }}
                              >
                                Logout
                              </Link>
                            </li>
                          </div>
                        : <div>
                            <li>
                              <Link to="/login">Login</Link>
                            </li>
                            <li>
                              <Link to="/register">Register</Link>
                            </li>
                          </div>}
                    </ul>
                  </div>
                </nav>
                <div>
                  <div>
                    <Switch>
                      <Route path="/" exact component={Home} />
                      <PublicRoute
                        authed={this.state.authed}
                        path="/login"
                        component={Login}
                      />
                      <PublicRoute
                        authed={this.state.authed}
                        path="/register"
                        component={Register}
                      />
                      <PrivateRoute
                        authed={this.state.authed}
                        path="/dashboard"
                        component={Dashboard}
                      />
                      <Route render={() => <h3>No Match</h3>} />
                    </Switch>
                  </div>
                </div>
              </div>
            </MuiThemeProvider>
          </div>
        </BrowserRouter>;
  }
}
