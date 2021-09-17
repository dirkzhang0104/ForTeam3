import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Board from '../Board/Board.js';
import { observe } from '../Game/Game.js'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <Jumbotron>
    <img alt="" src="https://www.cs.uci.edu/wp-content/uploads/cs-20201123-mdsbanner-1180x340-1.jpg"/>
        <br/>
        <h1>Welcome to Intro to Computer Science!</h1>
            <p>
                This is a fun interactive tutorial that assists you in learning 
                the basics of computer science. There will be a short reading followed by a quiz.
            </p>
            <p>
                <Button onClick={renderBoard} variant="primary">Learn more</Button>
            </p>
    </Jumbotron>
  )
}

const renderBoard = () => {
    const root = document.getElementById('root')

    observe((avatarPosition) =>
      ReactDOM.render(<Board avatarPosition={avatarPosition} />, root)
    )
}
