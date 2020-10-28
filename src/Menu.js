
import React from 'react';
import logo from './icon.png';
import GoogleBtn from './GoogleBtn';
import { Link } from 'react-router-dom';

import './App.css';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { Button } from 'primereact/button';

function Menu() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <GoogleBtn/>
        <br/>
         <Link className="LinkButton" to="/cadastro"><Button label="Cadastrar" /></Link>
        <br/>
         <Link className="LinkButton" to="/jogar"><Button label="Jogar" /></Link>
        <p>
          <Link className="LinkButton" to="/about"><Button label="Sobre" /></Link>
        </p>
      </header>
    </div>
  );
}

export default Menu;

//<Route path="/" exact={true} component={Cadastro} />