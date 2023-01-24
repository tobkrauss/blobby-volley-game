let playerScore = 0;
let opponentScore = 0;

class Ball {
    constructor() {
        this.width = 80
        this.height = 80
        this.x = 200
        this.y = Math.random()*200
        this.xspeed = 5
        this.yspeed = -2
    }

    draw() {
    image(game.ballImage, this.x, this.y, this.width, this.height)

this.x += this.xspeed;
this.y += this.yspeed;

if (this.x <= 0) {
    this.xspeed = -this.xspeed;
  }

if(this.x >= 635 - this.width && this.x < 610 && this.y >= 300 - this.height){
  this.xspeed = -this.xspeed;
}

if(this.x <= 635 && this.x > 660 && this.y >= 300 - this.height){
this.xspeed = -this.xspeed;
}

if(this.x >= 1250 - this.width ) {
    this.xspeed = -this.xspeed;
  }

if (this.y >= 600 - this.height || this.y <= 0) {
   this.yspeed = -this.yspeed;
  }


    fill("white")
    textSize(36)
    text ("Score " + opponentScore, 1050, 50, 300, 300)
    text ("Score " + playerScore, 100, 50, 300, 300)
    
    if (this.y >= 600 - this.height && this.x <= 615) {
      opponentScore = opponentScore+1
    }
    
    if (this.y >= 600 - this.height && this.x > 635) {
      playerScore = playerScore+1
    }

    }

collision (playerInfo) {

    let ballX = this.x + this.width / 2
    let ballY = this.y + this.height / 2

    let playerX = playerInfo.x + playerInfo.width / 2
    let playerY = playerInfo.y + playerInfo.height / 2

   if (dist(ballX, ballY, playerX, playerY) <= 80) {
      this.xspeed = -this.xspeed
    }

}
}
