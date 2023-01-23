class Player {
    constructor() {
        this.width = 80
        this.height = 120
        this.x = 277,5
        this.y = 600 - this.height
        this.velocity = 0
        this.gravity = 4
    }
    draw() {
    image(game.playerImage, this.x, this.y, this.width, this.height)

if(keyIsDown(65)&& this.x > 0) {
    this.x -= 7
}

if(keyIsDown(68)&& this.x < 615 - this.width) {
    this.x += 7
}

if(keyIsDown(87)&& this.y >=150) {
    this.y -= 16
}

if(keyIsDown(83) && this.y <= 600 - this.height) {
    this.y += 7
}

if(this.y <= 600 - this.height) {
    this.y += this.gravity
}  

}

}