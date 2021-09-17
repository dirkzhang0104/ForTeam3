import React from 'react'
import Square from '../Square/Square.js'
import Avatar from '../Avatar/Avatar.js'
import { moveAvatar } from '../Game/Game.js'
import { useState } from 'react'
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

export default function Board({ avatarPosition }) {
  
  const [answerObj, setAnswerObj] = useState({})

  // const questionsArray = ['1. What is the action of repeating code over and over again?', '2. What is a single instruction for a computer to perform a specific task?', '3. What is a symbol that works as a placeholder for data?', '', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10']
  // const answersArray = ['a. Algorithm', 'b. Loop', 'c. Program', 'd. Sequence', 'a. Loop', 'b. Algorithm ', 'c. Command', 'd. Sequence', 'a. Loop', 'b. Sequence', 'c. Command', 'd. Variable']

  const squares = []
  for (let i = 0; i < 40; i++) {
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
        These are questions
          {/* {questionsArray.shift()} */}
        </Square>
      </div>
      )
    } else {
      return (
        <div onClick={() => handleSquareClick(x, y)} key={i} style={{ width: '20%', height: '10%' }} >
          <Square black={black}>{piece}
          These are answers
            {/* {answersArray.shift()} */}
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

function getQuestions() {
  
}