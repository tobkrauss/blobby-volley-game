class Game {
    constructor () {
        this.background = new Background()
        this.backgroundImageBeach
        this.backgroundImageNet
        this.backgroundImageShadow
        this.player = new Player()
        this.playerImage
        this.opponent = new Opponent()
        this.opponentImage
    }

preload () {
    this.backgroundImageBeach = loadImage("./Images/background.png")
    this.backgroundImageNet = loadImage ("./Images/net.png")
    this.backgroundImageShadow = loadImage ("./Images/net_shadow.png")
    
    this.playerImage = loadImage("./Images/player_1.png")
    this.opponentImage = loadImage("./Images/player_2.png")

}

setup () {

}

draw (){
    this.background.draw()
    this.player.draw()
    this.opponent.draw()
}

}
