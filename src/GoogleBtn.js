import React, { Component } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';


const CLIENT_ID = '555342598187-qrtin7p5mffkhpmfv1prja9iod4qbojk';


class GoogleBtn extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.profileObj.name
      }));
    }
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
  }

  handleLoginFailure (response) {
    console.log('Falha no login')
  }

  handleLogoutFailure (response) {
    console.log('Falha no logout')
  }

  render() {
    return (
    <div>
          { this.state.accessToken ? <h5>Logado como: <br/><br/> { this.state.accessToken }</h5> : null }
      { this.state.isLogined ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Sair'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
        >
        </GoogleLogout>: <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText='Entrar com o Google'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        />
      }
    </div>
    )
  }
}

export default GoogleBtn;