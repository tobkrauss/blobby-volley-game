class Player {
    constructor() {
        this.width = 80
        this.height = 120
        this.x = 277,5
        this.y = 600 - this.height
}
draw() {
    image(game.playerImage, this.x, this.y, this.width, this.height)
}

moveRight() {
    this.x += 10
}


}


