class Game {
    constructor () {
        this.background = new Background()
        this.backgroundImageAll
        this.backgroundImageBeach
        this.backgroundImageNet
        this.backgroundImageShadow
        this.player = new Player()
        this.playerImage
        this.opponent = new Opponent()
        this.opponentImage
        this.ball = new Ball ()
        this.ballImage
    }

preload () {
    this.backgroundImageAll = loadImage("./Images/backgroundAll.png")
    this.backgroundImageBeach = loadImage("./Images/background.png")
    this.backgroundImageNet = loadImage ("./Images/net.png")
    this.backgroundImageShadow = loadImage ("./Images/net_shadow.png")
    
    this.playerImage = loadImage("./Images/player_1.png")
    this.opponentImage = loadImage("./Images/player_2.png")
    this.ballImage = loadImage ("./Images/volleyball.png")
}

setup () {

}

draw (){
if (mode == 0) {
    background(this.backgroundImageAll, 600, 400)
    fill("white")
    textSize(36)
    text("Press ENTER to start the game", 370, 100)
}
if (mode == 1) {
    this.background.draw()
    this.player.draw()
    this.opponent.draw()
    this.ball.draw()
    this.ball.collision(this.player)
    this.ball.collision(this.opponent)
    
}
}
}

function keyPressed() {
    if(keyCode === ENTER){
        mode = 1
    }
}