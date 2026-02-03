let heroFourArms;
let statueStone;

let cover = true;

let interagir = true;

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
    statueStone = new Stone(500, 600, 250, -450)
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

    // estatua
    image(img, 400, 126, 470, -486)

    // coberta da estatua
    if (cover = true) {
        statueStone.display()
    }

    //jump
    heroFourArms.jump()

    //crouch
    heroFourArms.crouch()

    //punch
    heroFourArms.punch()

    // 3 - enimigos e morte

    // 4 - talvez jogo recompensa
    console.log(interagir)
}

function keyReleased() {

    if (heroFourArms.jumpinterage == true && heroFourArms.crouchinterage == true) {
        if (keyCode === 32) {
            heroFourArms.activatejump()
        } else if (keyCode === 16) {
            heroFourArms.activatecrouch()
        } else if (keyCode === 13) {
            heroFourArms.activatepunch()
        }

    }
}


// function mouseReleased() {
//     if (mouseButton === LEFT) {
//         heroFourArms.activatepunch()
//         statueStone.destroy()
//     }
// }