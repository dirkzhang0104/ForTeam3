import React from 'react'
import Square from '../Square/Square.js'
import Avatar from '../Avatar/Avatar.js'

function renderSquare(i, [avatarX, avatarY]) {
  const x = i % 4
  const y = Math.floor(i / 4)
  // console.log(y)
  const isAvatarHere = x === avatarX && y === avatarY
  const black = false;
  // if (x % 2 === 0) {
  //   black = (x + y) % 2 === 1
  // } else {
  //   black = (x + y) % 2 !== 1
  // }

  const piece = isAvatarHere ? <Avatar /> : null

  return (
    <div key={i} style={{ width: '25%', height: '10%' }}>
      <Square black={black}>{piece}</Square>

      {/* <Square style={{
        border: 'solid',
        color: 'black'
      }}></Square> */}

    </div>
  )
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

// import React from 'react'
// import Square from '../Square/Square.js'
// import Avatar from '../Avatar/Avatar.js'

// export default function Board() {
//   return (
//     <div>
//       <Square black>
//         <Avatar />
//       </Square>
//     </div>
//   )
// }