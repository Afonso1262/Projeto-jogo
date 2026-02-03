let heroFourArms;

function preload() {
    img = loadImage('./statue.png')
    img2 = loadImage('./FourArms.png')
    img3 = loadImage('./FourArms_Jump.png')
    img4 = loadImage('./FourArms_Crouch.png')
    img5 = loadImage('./FourArms_Punch.png')
}

function setup() {
    createCanvas(windowWidth - 1000, windowHeight - 50)
    heroFourArms = new Hero(250, 300, 150, 300)
}

function draw() {
    //cenario
    background(200, 221, 227)

    noStroke()
    fill(102, 81, 65)
    rect(0, 600, windowWidth, height - 400)

    //boneco
    heroFourArms.display()
    image(img2, 250, 300, 150, 300)

    //bloco / estatua
    image(img, 400, 126, 470, -486)

    // coberta da estatua
    fill(207, 165, 89)
    rect(500, 600, 250, -450)

    //jump
    heroFourArms.jump()

    //crouch
    heroFourArms.crouch()

    //punch
    heroFourArms.punch()

    // 3 - enimigos e morte

    // 4 - talvez jogo recompensa
}

function keyPressed() {
    if (keyCode === 32) {
        heroFourArms.activatejump()
    }

    if (keyCode === 16) {
        heroFourArms.activatecrouch()
    }
}

function mousePressed() {
    if (mouseIsPressed === true) {
        if (mouseButton === LEFT) {
            heroFourArms.activatepunch()
        }
    }
}