
import React from 'react';
import logo from './icon.png';
import GoogleBtn from './GoogleBtn';
import { Link } from 'react-router-dom';

import './App.css';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { Button } from 'primereact/button';

const fetch = require('node-fetch');
let radn = Math.floor(Math.random() * 5);
let name;

// Requisição ao My JSON Server
fetch('https://my-json-server.typicode.com/Lawniet/SnakeDataset/FakeNames')
    .then(res => res.json())
    .then(json => {
       name =  json[radn].title;
       document.getElementById("welcome").innerHTML = "Bem vindo(a): "+ name +". Deseja mudar o apelido? Realize o Login ou cadastro."; })

function Menu() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <h5 id="welcome"></h5>
        <br/>
        <GoogleBtn/>
        <br/>
         <Link className="LinkButton" to="/jogar"><Button label="Jogar" /></Link>
          <br/>
        <p>
          <Link className="LinkButton" to="/about"><Button label="Sobre" /></Link>
        </p>
        <br/>
         <Link className="LinkButton" to="/cadastro"><Button label="Cadastrar" /></Link>
      </header>
    </div>
  );
}

export default Menu;

//<Route path="/" exact={true} component={Cadastro} />