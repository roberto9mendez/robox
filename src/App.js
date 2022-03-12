import React, { useState } from 'react';
import ro from './ro.png'
import './App.css';
import Calendar from 'react-calendar';

const App = () => {
  const fundo = "tc min-vh-100 cover flex-row backciano pt4 pb3";
  const foto = "https://robohash.org/23..1.234"; 
  const titulo = "JAVA - ANDROID"
  const linha1 = "24Ч";
  const linha2 = "3 раза в неделю";
  const linha3 = "24 000₽";
  const comentario1 = "Сделай своё приложение уже на первом занятии";
  const comentario2 = "Чтобы начать, тебе нужен только компьютер";

  const [fundoIni, fundoFin] = useState(fundo);
  const [fotoIni, fotoFin] = useState(foto);
  const [tituloIni, tituloFin] = useState(titulo);

  const [linha1Ini, linha1Fin] = useState(linha1);
  const [linha2Ini, linha2Fin] = useState(linha2);
  const [linha3Ini, linha3Fin] = useState(linha3);

  const [comentario1Ini, comentario1Fin] = useState(comentario1);
  const [comentario2Ini, comentario2Fin] = useState(comentario2);

  
  const changeStyle1 = () => {
    fundoFin(fundo);
    fotoFin(foto);
    tituloFin(titulo);

    linha1Fin(linha1);
    linha2Fin(linha2);
    linha3Fin(linha3);

    comentario1Fin(comentario1);
    comentario2Fin(comentario2);
  };
  
  const changeStyle2 = () => {
    fundoFin("tc min-vh-100 cover flex-row backorange pt4 pb3");
    fotoFin("https://robohash.org/74");
    tituloFin("Модули");

    linha1Fin("• XML - JAVA - RUN");
    linha2Fin("• Layouts - Class - Object");
    linha3Fin("• Variable - Method - Library");

    comentario1Fin("Только нужное и с применением");
    comentario2Fin("Самое доступное объяснение");
  };
  
  const changeStyle3 = () => {
    fundoFin("tc min-vh-100 cover flex-row backgreen pt4 pb3");
    fotoFin("https://robohash.org/124.234");
    tituloFin("Портфолио");

    linha1Fin("Различные техники и подходы");
    linha2Fin("Сложные задачи и лучшие решения");
    linha3Fin("Ваш багаж навыков и знаний");

    comentario1Fin("");
    comentario2Fin("");
  };
  
  const changeStyle4 = () => {
    fundoFin("tc min-vh-100 cover flex-row backyellow pt4 pb3");
    fotoFin("https://robohash.org/eassim");
    tituloFin("Работа");

    linha1Fin("Оформление портфолио");
    linha2Fin("Первое собеседование*");
    linha3Fin("Работа");

    comentario1Fin("Вместе создадим ваше портфолио");
    comentario2Fin("Подготовим вас к собеседованию");
  };

  return (
    <div className={fundoIni}>
      <header className="justify-center kitt-content">
        <nav className="flex justify-between bb b--white-50">
          <a className="link no-underline flex items-center" href="#">
            <img src={ro} className="dib w2 h2 pa2" alt="ROBOX"/>
          </a>
          
          <div className="flex-grow pa3 flex items-center">
            <a className="f6 dib black bg-animate hover-bg-washed-green no-underline pv2 ph3 br3 ba b--white-50" href="#0">О нас</a>
            <a className="f6 dib black bg-animate hover-bg-washed-green no-underline pv2 ph3 mh3 br3 ba b--white-50" href="#0">Записаться</a>
            <a className="f6 dib black bg-animate hover-bg-washed-green no-underline pv2 ph3 br3 ba b--white-50" href="#0">Контакты</a>
          </div>
        </nav>
      </header>
        <div>

          <div>
            <div className="mt4">
              <div>
              </div>
                <h1>{tituloIni}</h1>
                <ul className="list pl0 measure center">
                  <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">{linha1Ini}</li>
                  <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">{linha2Ini}</li>
                  <li className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">{linha3Ini}</li>
                </ul>              
              <p>{comentario1Ini}</p>
              <p>{comentario2Ini}</p>
            </div>
            <img alt='foto' src={fotoIni}/>
          </div>


          <div className="flex-ns pt3 pt5-ns kitt-content">
            <div onClick={changeStyle1} className="w-25-ns backciano br3 ma2 pv4 ph1 shadow-5">
              <code>Intro</code>
            </div>
            <div onClick={changeStyle2} className="w-25-ns backorange br3 ma2 pv4 ph1 shadow-5">
              <code>Модули</code>
            </div>
            <div onClick={changeStyle3} className="w-25-ns backgreen br3 ma2 pv4 ph1 shadow-5">
              <code>Портфолио</code>
            </div>
            <div onClick={changeStyle4} className="w-25-ns backyellow br3 ma2 pv4 ph1 shadow-5">
              <code>Работа</code>
            </div>
          </div>

        </div>
      
    </div>
  );
};

export default App;
