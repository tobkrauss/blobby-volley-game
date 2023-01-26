class Background {
    draw() {
        image(game.backgroundImageBeach, 0, 0, width, height)
        image(game.backgroundImageShadow, 625, 590)
        image(game.backgroundImageNet, 615, 300, 20, 390)
        game.soundBackground.play()
    }
}