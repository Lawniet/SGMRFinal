import React from 'react';
import logo from './icon.png';
import qrcode from './QR_Code.png';
import './App.css';
import { Link } from 'react-router-dom';


import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { Button } from 'primereact/button';

function About() {
  return (
    <div className="App">
      <header className="App-header">
      <br/><br/><br/>
      <img src={logo} className="Icon-logo" alt="logo" />
      <br/><br/><br/>
      <p>
        O Snake's Game Minimalist Rereading, ou simplesmente SGMR é um jogo de releitura no estilo clássico de aventura em terceira pessoa, ambientado em um cenário 2D. Esta versão possui estilo minimalista com cores vívidas e tema juvenil. O jogo foi inspirado no clássico e icônico 'Snake game'. Especialmente desenvolvido para os nostálgicos fãs de Nokia Snake Game, para que este não faça parte apenas do passado, mas que possa ter sua releitura no presente. Para maiores informações acesse o repositório:
      </p>
      <br/>
        <img src={qrcode} className="App-logo" alt="logo" />
        <br/>
        <Link className="LinkButton" to="/"><Button label="Voltar ao menu" /></Link>
      </header>
    </div>
  );
}

export default About;