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
        this.playerRedWonImage
        this.playerGreenWonImage
        this.ball = new Ball ()
        this.soundCollision
        this.soundBackground
        this.soundGameOverRed
        this.soundGameOverGreen
    }

preload () {
    this.backgroundImageAll = loadImage("./Images/backgroundAll.png")
    this.backgroundImageBeach = loadImage("./Images/background.png")
    this.backgroundImageNet = loadImage ("./Images/net.png")
    this.backgroundImageShadow = loadImage ("./Images/net_shadow.png")
    
    this.playerImage = loadImage("./Images/player_1.png")
    this.opponentImage = loadImage("./Images/player_2.png")
    this.ballImage = loadImage("./Images/volleyball.png")
    this.playerRedWonImage = loadImage ("./Images/player-red-won.png")
    this.playerGreenWonImage = loadImage ("./Images/player-green-won.png")
    this.soundCollision = new Audio ("./Sounds/sound-collision.mp3")
    this.soundBackground = new Audio ("./Sounds/ocean-waves.mp3")
    this.soundGameOverRed = new Audio ("./Sounds/game-over-red-short.mp3")
    this.soundGameOverGreen = new Audio ("./Sounds/game-over-green-short.mp3")
    
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
    this.ball.collisionPlayer(this.player)
    this.ball.collisionOpponent(this.opponent)
}
}
}

function keyPressed() {
    if(keyCode === ENTER){
        mode = 1
    }
}


