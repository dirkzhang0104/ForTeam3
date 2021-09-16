import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './components/Board/Board.js';
import { observe } from './components/Game/Game.js'
// import reportWebVitals from './reportWebVitals';


  // <React.StrictMode>
    // <Board avatarPosition={[1, 1]}/>,
  // </React.StrictMode>,
  const root = document.getElementById('root')

  observe((avatarPosition) =>
    ReactDOM.render(<Board avatarPosition={avatarPosition} />, root)
  )


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
