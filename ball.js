let gameOverPlayer = false;
let gameOverOpponent = false;
let playerScore = 0;
let opponentScore = 0;

class Ball {
  constructor() {
    this.lastCollision = 0
    this.width = 80
    this.height = 80
    this.x = 200
    this.y = 300
    this.xspeed = 8
    this.yspeed = -2.5
    this.gravity = 0.7 
    this.collisionPlayerAllowed = true
    this.collisionOpponentAllowed = true

  }

  draw() {
    if (gameOverPlayer == false && gameOverOpponent == false) {
      image(game.ballImage, this.x, this.y, this.width, this.height)

      this.x += this.xspeed;
      this.y += this.yspeed
      this.y += this.gravity;

      if (this.x <= 0) {
        this.xspeed = -this.xspeed;
      }

      if (this.x >= 625 - this.width && this.x < 625 && this.y >= 300 - this.height) {
        this.xspeed = -this.xspeed;
      }

      if (this.x <= 625 && this.x > 660 && this.y >= 300 - this.height) {
        this.xspeed = -this.xspeed;
      }

      if (this.x >= 1250 - this.width) {
        this.xspeed = -this.xspeed;
      }

      if (this.y >= 600 - this.height || this.y <= 0) {
        this.yspeed = -this.yspeed;
      }


      fill("white")
      textSize(36)
      text("Score " + opponentScore, 1050, 50, 300, 300)
      text("Score " + playerScore, 100, 50, 300, 300)

      if (this.y >= 600 - this.height && this.x <= 615) {
        opponentScore = opponentScore + 1
        game.player.x = 277, 5
        game.player.y = 600 - this.height
        game.opponent.x = 897, 5
        game.opponent.y = 600 - this.height
        this.xspeed = 8
      }

      if (this.y >= 600 - this.height && this.x > 635) {
        playerScore = playerScore + 1;
        game.player.x = 277, 5
        game.player.y = 600 - this.height
        game.opponent.x = 897, 5
        game.opponent.y = 600 - this.height
        this.xspeed = 8

      }
    }

    checkGameOverPlayer();
    if (gameOverPlayer == true) {
      fill("blue")
      rect(100, 50, 1000, 600)
      fill("white")
      text("Player Green won! To restart the game, press ENTER ", 200, 350)

      checkRestartOpponentWon();
    }

    checkGameOverOpponent();
    if (gameOverOpponent == true) {
      fill("blue")
      rect(100, 50, 1000, 600)
      fill("white")
      text("Player Red won! To restart the game, press ENTER ", 200, 350)

      checkRestartPlayerWon();
    }

  }



  collisionPlayer(playerInfo) {

    let ballX = this.x + this.width / 2
    let ballY = this.y + this.height / 2

    let playerX = playerInfo.x + playerInfo.width / 2
    let playerY = playerInfo.y + playerInfo.height / 2

    if (this.collisionPlayerAllowed == true && dist(ballX, ballY, playerX, playerY) <= 80) {
      /* game.soundCollision.play(); */
      this.xspeed = -this.xspeed*1.05
      this.yspeed = -this.yspeed
      this.collisionPlayerAllowed = false

    }
    if (dist(ballX, ballY, playerX, playerY) > 150) {
      this.collisionPlayerAllowed = true

    }
  } 

  collisionOpponent(opponentInfo) {

    let ballX = this.x + this.width / 2
    let ballY = this.y + this.height / 2

    let opponentX = opponentInfo.x + opponentInfo.width / 2
    let opponentY = opponentInfo.y + opponentInfo.height / 2

    if (this.collisionOpponentAllowed == true && dist(ballX, ballY, opponentX, opponentY) <= 80) {
      /* game.soundCollision.play(); */
      this.xspeed = -this.xspeed*1.05
      this.yspeed = -this.yspeed
      this.collisionOpponentAllowed = false

    }
    if (dist(ballX, ballY, opponentX, opponentY) > 150) {
      this.collisionOpponentAllowed = true

    }
  }


}


function checkGameOverPlayer() {
  if (opponentScore >= 5) {
    gameOverPlayer = true
   /*  game.soundGameOver.play(); */
  }
}

function checkRestartOpponentWon() {
  if (keyCode === ENTER) {
    restartGameOpponentWon();
  }
}

function restartGameOpponentWon() {

  playerScore = 0
  opponentScore = 0

  game.ball.x = 1100
  game.ball.y = 100
  game.xspeed = -5
  game.yspeed = -2
  game.player.x = 277, 5
  game.player.y = 600 - game.player.height

  game.opponent.x = 897, 5
  game.opponent.y = 600 - game.opponent.height

  gameOverPlayer = false

}

function checkGameOverOpponent() {
  if (playerScore >= 5) {
    gameOverOpponent = true
   /*  game.soundGameOver.play(); */
  }
}

function checkRestartPlayerWon() {
  if (keyCode === ENTER) {
    restartGamePlayerWon();
  }
}

function restartGamePlayerWon() {

  playerScore = 0
  opponentScore = 0

  game.ball.x = 100
  game.ball.y = 100
  game.xspeed = 5
  game.yspeed = -2
  game.player.x = 277, 5
  game.player.y = 600 - game.player.height

  game.opponent.x = 897, 5
  game.opponent.y = 600 - game.opponent.height

  gameOverOpponent = false

}
