import React, {Component} from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Email from 'material-ui/svg-icons/communication/email';
import Password from 'material-ui/svg-icons/action/lock';
import '../styles/login-page.css';

class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  handleTouchTap() {
    alert('tap');
  }

  render () {
    return (
      <div className="main">
        <Card>
          <CardTitle title="Fazer login" subtitle="Você não está autenticado!" className="cardTitle"/>
          <CardText>

          <Menu disableAutoFocus={true}>
            <MenuItem leftIcon={<Email />} disabled={true}
            >
            <TextField
              hintText="Email"
              floatingLabelText="Email"
            />
            </MenuItem>
          </Menu>

          <Menu disableAutoFocus={true}>
            <MenuItem leftIcon={<Password />} disabled={true}>
            <TextField
              hintText="Password"
              floatingLabelText="Password"
              type="password"
            />
            </MenuItem>
          </Menu>

          </CardText>
          <CardActions>
            <RaisedButton label="LOGIN" onTouchTap={this.handleTouchTap} primary />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default LoginPage;
