import React, { Component } from'react';
import logo from './QRCode.png';
import GoogleBtn from './GoogleBtn';
import './App.css';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { Button } from 'primereact/button';

function About() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
        O Snake's Game Minimalist Rereading, ou simplesmente SGMR é um jogo de releitura no estilo clássico de aventura em terceira pessoa, ambientado em um cenário 2D. Esta versão possui estilo minimalista com cores vívidas e tema juvenil. O jogo foi inspirado no clássico e icônico 'Snake game', produzido pela Nokia. Para maiores informações acesse o repositório:
      </p>
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <Button label="Voltar ao menu" />
 
      </header>
    </div>
  );
}

export default About;