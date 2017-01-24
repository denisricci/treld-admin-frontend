import React, {Component} from 'react';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Email from 'material-ui/svg-icons/communication/email';
import Password from 'material-ui/svg-icons/action/lock';
import CircularProgress from 'material-ui/CircularProgress';
import Snackbar from 'material-ui/Snackbar';
import {usernameChanged, passwordChanged, loginUser} from '../actions/auth';

import '../styles/login-page.css';

class LoginPage extends Component {

  state = {
    usernameError: null,
    passwordError: null,
    hasError: false,
  };

  handleUsernameChange(event) {
    this.props.usernameChanged(event.target.value);
  }

  handlePasswordChange(event) {
    this.props.passwordChanged(event.target.value);
  }

  handleLogin() {
    const {username, password} = this.props;
    if (!this.hasFormErros()) {
      this.resetErros();
      this.props.loginUser({username, password});
    }
  }

  resetErros() {
    this.setState({
      usernameError: null,
      passwordError: null,
    });
  }

  hasFormErros() {
    let hasErrors = false;
    const {username, password} = this.props;
    if(isEmpty(username)){
        hasErrors = true;
        this.setState({usernameError: 'Campo obrigatório.'});
    }

    if(isEmpty(password)){
        hasErrors = true;
        this.setState({passwordError: 'Campo obrigatório.'});
    }

    return hasErrors;
  }

  getBottom() {
    if(this.props.loading) {
      return <CircularProgress />;
    }
    return (
      <RaisedButton label="LOGIN"
        onTouchTap={() => this.handleLogin()}
        primary
      />
    );
  }

  render () {
    let bottom = this.getBottom();
    return (
      <div className="container">
        <div className="main">
          <Card>
            <CardTitle className="cardTitle" subtitle="Você não está autenticado!" title="LOGIN" />
            <CardText>

            <Menu disableAutoFocus >
              <MenuItem
                disabled
                leftIcon={<Email style={{float: 'left',textAlign: 'center', height: '80%'}} />}
              >
              <TextField
                errorText={this.state.usernameError}
                floatingLabelText="Username"
                hintText="Username"
                onChange={(event) => this.handleUsernameChange(event)}
                style={{width: '35%'}}
                value={this.props.username}
              />
              </MenuItem>
            </Menu>

            <Menu disableAutoFocus>
              <MenuItem
                disabled
                leftIcon={<Password style={{float: 'left',textAlign: 'center', height: '80%'}} />}
              >
              <TextField
                errorText={this.state.passwordError}
                floatingLabelText="Password"
                hintText="Password"
                onChange={(event) => this.handlePasswordChange(event)}
                style={{width: '35%'}}
                type="password"
                value={this.props.password}
              />
              </MenuItem>
            </Menu>

            </CardText>

            <CardActions style={{textAlign: 'center'}}>
              {bottom}
            </CardActions>
          </Card>


        </div>
        <Snackbar
          autoHideDuration={4000}
          message={this.props.error}
          open={this.props.hasErrors}
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  username: React.PropTypes.string,
  usernameChanged: React.PropTypes.func,
  password: React.PropTypes.string,
  passwordChanged: React.PropTypes.func,
  loginUser: React.PropTypes.func,
  loading: React.PropTypes.bool,
  error: React.PropTypes.string.isRequired,
  hasErrors: React.PropTypes.bool.isRequired,
};

LoginPage.defaultProps = {
  error: '',
};

const mapStateToProps = ({auth}) => {
  const {username, password, error, loading, hasErrors} = auth;
  return {username, password, error, loading, hasErrors};
};

export default connect(mapStateToProps, {
  usernameChanged,
  passwordChanged,
  loginUser,
})(LoginPage);
