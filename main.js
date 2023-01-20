const game = new Game()

function preload() {
game.preload()
}


function setup () {
createCanvas(1250, 690)
}


function draw () {
    game.draw()
}  


function keyPressed() {

    if (keyCode === 39) {
    game.player.moveRight()
  }
  if (keyCode === 37) {
    game.player.moveLeft()
  
  }
      }