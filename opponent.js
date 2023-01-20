class Opponent {
    constructor() {
        this.width = 80
        this.height = 120
        this.x = 897,5   
        this.y = 600 - this.height
}
draw() {
    image(game.opponentImage, this.x, this.y, this.width, this.height)
}


}
