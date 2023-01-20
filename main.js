const game = new Game()

function preload() {
    game.preload()
}


function setup() {
    createCanvas(1250, 690)
}


function draw() {
    game.draw()
}


function keyPressed() {

    // KeyPress Player

    if (keyCode === 68) {
        game.player.moveRight()
    }
    if (keyCode === 65) {
        game.player.moveLeft()
    }

    if (keyCode === 87) {
        game.player.jump()
    }


    // KeyPress Opponent

    if (keyCode === 39) {
        game.opponent.moveRight()
    }
    if (keyCode === 37) {
        game.opponent.moveLeft()
    }

    if (keyCode === 38) {
        game.opponent.jump()
    }

}