import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
//import App from './App.js'

const App = () => {
  const fundo = "flex-row bg-light-green mh2 mt2 br--top br3 pa5";
  const foto = "https://robohash.org/bassimo?500x500";
  const [fundoIni, fundoFin] = useState(fundo);
  const [fotoIni, fotoFin] = useState(foto);
  
  const changeStyle1 = () => {
    fundoFin(fundo);
    fotoFin(foto);
  };
  
  const changeStyle2 = () => {
    const fundo2 = "flex-row bg-light-red mh2 mt2 br--top br3 pa5";
    fundoFin(fundo2);
    const foto2 = "https://robohash.org/cassimo?500x500";
    fotoFin(foto2);
  };
  
  const changeStyle3 = () => {
    const fundo3 = "flex-row bg-green mh2 mt2 br--top br3 pa5";
    fundoFin(fundo3);
    const foto3 = "https://robohash.org/dassimo?500x500";
    fotoFin(foto3);
  };
  
  const changeStyle4 = () => {
    const fundo4 = "flex-row bg-yellow mh2 mt2 br--top br3 pa5";
    fundoFin(fundo4);
    const foto4 = "https://robohash.org/eassim?500x500";
    fotoFin(foto4);
  };

  return (

    <div className="App">
      <header>
        <div className={fundoIni}>
          <h1>Principal</h1>
          <div className="flex-ns justify-around items-center">
            <div>
              <p>To change the state of the React component</p>
              <p>is useful when you are working on a single</p>
              <p>page application</p>
            </div>
            <img alt='foto' src={fotoIni}/>
          </div>
        </div>
      </header>

      <div className="flex justify-around mh2">
        <div onClick={changeStyle1} className="w-25 bg-light-green br--bottom br3 pa4">
          <code>1</code>
        </div>
        <div onClick={changeStyle2} className="w-25 bg-light-red br--bottom br3 pa4 mh1">
          <code>2</code>
        </div>
        <div onClick={changeStyle3} className="w-25 bg-green br--bottom br3 pa4 mr1">
          <code>3</code>
        </div>
        <div onClick={changeStyle4} className="w-25 bg-yellow br--bottom br3 pa4">
          <code>4</code>
        </div>
      </div>
    </div>
  );
};

export default App;