const GRID_SIZE = 21;

export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1
  }
}


export function outsideGrid(postition) {
  return (
    postition.x < 1 || postition.x > GRID_SIZE ||
    postition.y < 1 || postition.y > GRID_SIZE
  )
}


