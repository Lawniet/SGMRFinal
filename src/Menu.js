
import React, { Component } from'react';
import logo from './icon.png';
import GoogleBtn from './GoogleBtn';
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
        <Button label="Cadastrar" />
        <br/>
        <Button label="Jogar" />

 
      </header>
    </div>
  );
}

export default Menu;