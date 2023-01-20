class Opponent {
    constructor() {
        this.width = 80
        this.height = 120
        this.x = 897,5   
        this.y = 600 - this.height
        this.velocity = 0
}
draw() {
    image(game.opponentImage, this.x, this.y, this.width, this.height)

    if(keyIsDown(LEFT_ARROW)&& this.x > 647) {
        this.x -= 7
    }
    
    if(keyIsDown(RIGHT_ARROW)&& this.x < 1170) {
        this.x += 7
    }


}
jump() {
    this.velocity = -10
}
}

