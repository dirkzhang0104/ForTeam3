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
          this is a question
        </Square>
      </div>
      )
    } else {
      return (
        <div onClick={() => handleSquareClick(x, y)} key={i} style={{ width: '20%', height: '10%' }} >
          <Square black={black}>{piece}
          this is an answer
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