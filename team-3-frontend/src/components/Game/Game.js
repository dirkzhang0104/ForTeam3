import React from 'react';

// export function observe(receive) {
//   const randPos = () => Math.floor(Math.random() * 8)
//   setInterval(() => receive([randPos(), randPos()]), 500)
// }

let avatarPosition = [0, 0]
let observer = null

function emitChange() {
  observer(avatarPosition)
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }

  observer = o
  emitChange()
}

export function moveAvatar(toX, toY) {
  avatarPosition = [toX, toY]
  emitChange()
}