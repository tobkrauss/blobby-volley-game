let mode;
const game = new Game()

function preload() {
    game.preload()
}


function setup() {
    mode = 0;
    createCanvas(1250, 690)
    textSize(21);
}


function draw() {
    game.draw()
}