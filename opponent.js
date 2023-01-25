class Opponent {
    constructor() {
        this.width = 80
        this.height = 120
        this.x = 897,5   
        this.y = 600 - this.height
        this.velocity = 0
        this.gravity = 4

}
draw() {
    image(game.opponentImage, this.x, this.y, this.width, this.height)

    if(keyIsDown(LEFT_ARROW)&& this.x > 635) {
        this.x -= 7
    }
    
    if(keyIsDown(RIGHT_ARROW)&& this.x < 1170) {
        this.x += 7
    }

    if(keyIsDown(UP_ARROW)) {
        this.velocity = -7
    }

    if(keyIsDown(38)&& this.y >=150) {
        this.y -= 16
    }
    
    if(keyIsDown(40) && this.y <= 600 - this.height) {
        this.y += 7
    }
    
    if(this.y <= 600 - this.height) {
        this.y += this.gravity
    }  
    
    
}  

}

