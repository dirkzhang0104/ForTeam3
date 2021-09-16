import React from 'react'
import Square from '../Square/Square.js'
import Avatar from '../Avatar/Avatar.js'
import { moveAvatar } from '../Game/Game.js'

function renderSquare(i, [avatarX, avatarY]) {
  const x = i % 4
  const y = Math.floor(i / 4)

  const isAvatarHere = x === avatarX && y === avatarY
  const black = false;

  const piece = isAvatarHere ? <Avatar /> : null

  return (
    <div onClick={() => handleSquareClick(x, y)} key={i} style={{ width: '25%', height: '10%' }} >
      <Square black={black}>{piece}</Square>

    </div>
  )
}

function handleSquareClick(toX, toY) {
  console.log("X is ", toX)
  console.log("Y is ", toY)
  moveAvatar(toX, toY)
}

export default function Board({ avatarPosition }) {
  const squares = []
  for (let i = 0; i < 40; i++) {
    squares.push(renderSquare(i, avatarPosition))
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
