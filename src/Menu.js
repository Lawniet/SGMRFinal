
import React from 'react';
import logo from './icon.png';
import GoogleBtn from './GoogleBtn';
import { Link } from 'react-router-dom';
import SweetAlert from 'sweetalert2-react';

import './App.css';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { Button } from 'primereact/button';

const fetch = require('node-fetch');
let radn = Math.floor(Math.random() * 5);


fetch('https://my-json-server.typicode.com/Lawniet/SnakeDataset/FakeNames')
    .then(res => res.json())
    .then(json => {
       alert("Bem vindo: "+ json[radn].title + ". Deseja mudar de nome? Realize o Login ou cadastro");
       
})

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
          <br/>
        <p>
          <Link className="LinkButton" to="/about"><Button label="Sobre" /></Link>
        </p>
      </header>
    </div>
  );
}

export default Menu;

//<Route path="/" exact={true} component={Cadastro} />