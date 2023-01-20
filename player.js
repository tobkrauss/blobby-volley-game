class Player {
    constructor() {
        this.width = 80
        this.height = 120
        this.x = 277,5
        this.y = 600 - this.height
        this.velocity = 0
}
draw() {
    image(game.playerImage, this.x, this.y, this.width, this.height)

if(keyIsDown(65)&& this.x > 0) {
    this.x -= 7
}

if(keyIsDown(68)&& this.x < 545) {
    this.x += 7
}

}  

jump() {
    this.velocity = -5
}
}

