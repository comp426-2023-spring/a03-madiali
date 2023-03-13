export function rps(playerShot) {
  const shotEncoding = {'rock': 0b001, 'paper': 0b010, 'scissors': 0b100}
  const winDecoding = {0b101: 'rock', 0b011: 'paper', 0b110: 'scissors'}

  // Convert playerShot to lowercase
  if (playerShot !== undefined) {
      playerShot = playerShot.toLowerCase()
  }
  // Generate opponentShot
  let opponentShotIndex = Math.random() * 3
  let opponentShot = shotEncoding[opponentShotIndex]

  // Case 1: undefined playerShot
  if (playerShot === undefined) {
      return JSON.stringify({'player': opponentShot})
  } 
  // Case 2: invalid playerShot
  else if (shotEncoding.playerShot === undefined) {
      console.error('Valid shots: rock, paper, scissors')
  } 
  // Case 3: valid playerShot
  else {
      let winState = playerShot | opponentShot
      let result = 'lose'
      if (playerShot === winDecoding.winState) {
          result = 'win'
      }
    return JSON.stringify({'player': playerShot, 'opponent': opponentShot, 'result': result})
  }
}