import React from 'react';
import './Cadastro.css';
const fetch = require('node-fetch');

/*const cad = () => {
  

  return (
    
    <div>
      <form action = '/jogar' component={() => { 
     window.location.href = 'https://sgmr.herokuapp.com/'; 
     return null;}}>
        <h2>
          Cadastro
        </h2>
        
        <div class="input">
          <input required type="text" />
          <label>Nome</label>
          <span class="error"></span>
        </div>

        <div class="input">
          <input required type="text" />
          <label>Apelido</label>
          <span class="error"></span>
        </div>

        <div class="input">
          <input required type="email" />
          <label>Email</label>
          <span class="error"></span>
        </div>

         <div class="input">
          <input required type="password" />
          <label>Senha</label>
          <span class="error"></span>
        </div>

       <button type="submit">Enviar</button>
      
      </form>
    
    </div>
  );
}

export default cad;*/

class Cadastro extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()

    let todo = {
    name: event.target.username.value,
    nick: event.target.nick.value,
    email: event.target.email.value,
    pass: event.target.pass.value
  };
 fetch('https://my-json-server.typicode.com/Lawniet/SnakeDataset/Users', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: { 'Content-Type': 'application/json' }
}).then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.log(err))
  alert(JSON.stringify(todo));
  window.location.href = 'https://sgmr.herokuapp.com/'; 
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} >
<label>Nome:
      <input
            required type="text"
            name="username"
            ref={node => (this.inputNode = node)}
          /><span class="error"></span>
          </label>
          
<label>Apelido:
          <input
            required type="text"
            name="nick"
            ref={node => (this.inputNode = node)}
          />
          <span class="error"></span>
        </label>
        <label>Email:
          <input
            required type="email"
            name="email"
            ref={node => (this.inputNode = node)}
          /><span class="error"></span>
           </label>
          
 <label>Senha:
          <input
            required type="password" 
            name="pass"
            ref={node => (this.inputNode = node)}
          /><span class="error"></span>
         </label>
          
         <button type="submit">Enviar</button>
      </form>
    )
  }
}
export default Cadastro;