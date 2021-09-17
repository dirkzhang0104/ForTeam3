import React from 'react'
import Square from '../Square/Square.js'
import Avatar from '../Avatar/Avatar.js'
import { moveAvatar } from '../Game/Game.js'
import { useState, useEffect } from 'react'
import axios from 'axios';
// import { cloneDeep } from 'lodash/cloneDeep'

// function renderSquare(i, [avatarX, avatarY]) {

//   const x = i % 4
//   const y = Math.floor(i / 4)

//   const isAvatarHere = x === avatarX && y === avatarY
//   const black = false;

//   const piece = isAvatarHere ? <Avatar /> : null

//   return (
//     <div onClick={() => handleSquareClick(x, y)} key={i} style={{ width: '25%', height: '10%' }} >
//       <Square black={black}>{piece}</Square>
//     </div>
//   )
// }

// function handleSquareClick(toX, toY) {
//   console.log("X is ", toX)
//   console.log("Y is ", toY)
//   moveAvatar(toX, toY)
//   // setAnswerArray(previousArray => previousArray.push([toX, toY]))
// }

// const questions = [];
// const answers = [];

export default function Board({ avatarPosition }) {

  const [answerObj, setAnswerObj] = useState({});
  // const [questions, setQuestions] = useState([]);
  // const [answers, setAnswers] = useState([]);


  const questionsArray = ['1. What is the action of repeating code over and over again?',
  '2. What is a single instruction for a computer to perform a specific task?',
  '3. What is a symbol that works as a placeholder for data?',
  '4. Which of the following is a primitive data type?',
  '5. What is computer programming?',
  '6. Which of the following is a programming language?',
  '7. What data type is \"Hello World\"?',
  '8. What is an algorithm?',
  '9. What is pair programming?',
  '10. What two numbers are used in binary?']
  const answersArray = ['a. Algorithm', 'b. Loop', 'c. Program', 'd. Sequence', 'a. Loop', 'b. Algorithm ', 'c. Command', 'd. Sequence', 'a. Loop', 'b. Sequence', 'c. Command', 'd. Variable', 'a. Boolean', 'b. Object', 'c. String', 'd. Array', 'a. List of functions', 'b. Telling a computer what to do', 'c. TV show', 'd. Radio show', 'a. Java', 'b. Cobra', 'c. Byte', 'd. VS Code', 'a. Text', 'b. Array', 'c. Quote', 'd. String', 'a. Questions for a machine', 'b. A user name', 'c. Brains for a robot', 'd. Instructions for a computer', 'a. Programming alone', 'b. Programming with another developer', 'c. Working with two computers', 'd. Working on two projects at once', 'a. 1 and 2', 'b. 5 and 10', 'c. 0 and 1', 'd. 2 and 10']

  // useEffect(() => {
  //   getQs();
  // }, [])

  // function getQs() {
  //   axios.get("http://localhost:8080/questions")
  //   .then(rawData => {
  //     // console.log(rawData.data)
  //     let arrOfAs = [];
  //     rawData.data.forEach(obj => {
  //       // console.log(obj.answersList.map(obj => {
  //       //   return obj.answer;
  //       // }))
  //       let innerArr = obj.answersList.map(obj => {
  //         return obj.answer;
  //       });
  //       // console.log(innerArr)
  //       innerArr.forEach(str => {
  //         // console.log(str)
  //         arrOfAs.push(str);
  //         // console.log(arrOfAs)
  //       })
  //     })
  //     // console.log(answers)
  //     setAnswers(arrOfAs);
  //     // console.log(arrOfAs)
  //     setQuestions(rawData.data.map(obj => {
  //       return obj.question
  //     }));
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }

  const squares = []
  for (let i = 0; i < 50; i++) {
    squares.push(renderSquare(i, avatarPosition))
  }

  function handleSquareClick(toX, toY) {
    // console.log("X is ", toX)
    // console.log("Y is ", toY)
    if (Object.keys(answerObj).length >= toY) {
      let prev = answerObj;
      prev[toY] = toX;
      setAnswerObj(prev)
      moveAvatar(toX, toY)
    } else {
      alert("please answer the previous question")
    }


    // console.log(answerObj)
  }

  function renderSquare(i, [avatarX, avatarY]) {

    const x = i % 5
    const y = Math.floor(i / 5)

    const isAvatarHere = x === avatarX && y === avatarY
    const black = false;

    const piece = isAvatarHere ? <Avatar /> : null

    if (x === 0) {
      return (

      <div onClick={() => handleSquareClick(x, y)} key={i} style={{ width: '20%', height: '10%' }} >
        <Square black={black}>{piece}
        {/* These are questions */}
          {questionsArray.shift()}
        </Square>
      </div>
      )
    } else {
      return (
        <div onClick={() => handleSquareClick(x, y)} key={i} style={{ width: '20%', height: '10%' }} >
          <Square black={black}>{piece}
          {/* These are answers */}
          {/* {console.log(answers)} */}
            {answersArray.shift()}
          </Square>
        </div>
      )
    }
    // return (
    //   <div onClick={() => handleSquareClick(x, y)} key={i} style={{ width: '25%', height: '10%' }} >
    //     <Square black={black}>{piece}</Square>
    //   </div>
    // )
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}
    >
      {squares}
    </div>
  )
}
