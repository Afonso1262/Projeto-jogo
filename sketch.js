// let heroFourArms;
let statueStone;

let cover = true;
// let interagir = true;

let imagemEscolhida
let img_x, img_y, img_w, img_h;

let enemyDrone;
let enemyDrone2;

let tempo;
let counter;

let tempo2;
let counter2;

let tempo3;
let counter3;
let interage = true;

function preload() {
    img = loadImage('./statue.png')
    img2 = loadImage('./FourArms.png')
    img3 = loadImage('./FourArms_Jump.png')
    img4 = loadImage('./FourArms_Crouch.png')
    img5 = loadImage('./FourArms_Punch.png')
    img6 = loadImage('./Drone.png')
}

function setup() {
    createCanvas(windowWidth - 1000, windowHeight - 50)
    statueStone = new Stone(500, 600, 250, -450)

    imagemEscolhida = img2
    img_x = 250
    img_y = 300
    img_w = 150
    img_h = 300

    {
        enemyDrone = new Enemy(width, 500, random(-5, -8))
        enemyDrone2 = new Enemy(width, 300, random(-5, -8))
    }

    tempo = millis()
    tempo2 = millis()

    counter = millis()
    counter2 = millis()

    tempo3 = millis()
    counter3 = millis()
}
function draw() {
    //cenario
    background(200, 221, 227)

    noStroke()
    fill(102, 81, 65)
    rect(0, 600, windowWidth, height - 400)

    //boneco
    image(imagemEscolhida, img_x, img_y, img_w, img_h)

    // estatua
    image(img, 400, 126, 470, -486)

    // coberta da estatua
    if (cover = true) {
        statueStone.display()
    }

    if (millis() > 3000) {
        enemyDrone.display()
        enemyDrone.droneMove()
    }

    if (millis() > 6000) {
        enemyDrone2.display()
        enemyDrone2.droneMove()
    }

    counter = millis()
    counter2 = millis()
    counter3 = millis()

    //Counter para os drones aparecerem
    if (counter - tempo > 3000) {
        tempo = millis();
        enemyDrone = new Enemy(width, 500, random(-6, -8))
    }

    if (counter2 - tempo2 > 7000) {
        tempo2 = millis();
        enemyDrone2 = new Enemy(width, 300, random(-6, -8))
    }

    if (counter3 - tempo3 > 600) {
        //imagem original quando o cronometro atinge um valor
        imagemEscolhida = img2
        img_y = 300
        img_h = 300
        img_w = 150
        interage = true
    }
}

function keyPressed() {
    if (interage == true) {
        if (keyCode === 32) {
            imagemEscolhida = img3
            img_y = 250
            img_h = 250
            tempo3 = millis();
            interage = false
        } else if (keyCode === 16) {
            imagemEscolhida = img4
            img_y = 400
            img_h = 200
            tempo3 = millis();
            interage = false
        } else if (keyCode === 13) {
            imagemEscolhida = img5
            img_w = 250
            statueStone.destroy()
            tempo3 = millis();
            interage = false
        }
    }

}

//detah

function death() {
    if (widthD = img_w) {

    }
}