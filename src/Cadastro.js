import React from 'react';
import './Cadastro.css';

const cad = () => {
  

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

export default cad;