function preload() {

}

function setup() {
    createCanvas(windowWidth, windowHeight)

}

function draw() {
    //cenario
    background(200, 221, 227)

    noStroke()
    fill(102, 81, 65)
    rect(0, 600, windowWidth, height - 400)

    //boneco
    fill(209, 67, 76)
    rect(20, 30, 30, 40)

    //bloco
    fill(207, 165, 89)
    rect(500, 600, 200, -400)

    // 2 - açoes boneco e bloco partir estatua

    // 3 - enimigos e morte

    // 4 - talvez jogo recompensa

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
