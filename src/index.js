import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import { GoogleLogin } from 'react-google-login';
import * as serviceWorker from './serviceWorker';

import Menu from './Menu';

ReactDOM.render(<Menu />, document.getElementById('root')
);


/*import Phaser from "phaser";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import playGame from "./phaser/scene";

import * as serviceWorker from './serviceWorker';

//console.log(App);

export const config = {
  type: Phaser.AUTO,
  parent: "phaser",
  width: 800,
  height: 600,
  scene: playGame
};


const game = new Phaser.Game(config);

ReactDOM.render(
  <App />,
  document.getElementById("root") || document.createElement("div")
);*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
