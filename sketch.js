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

let widthD;

let distanciaBichos

let playG1 = true
let win = false
let lose = false

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

    enemyDrone = new Enemy(widthD, 500, -7)
    enemyDrone2 = new Enemy(widthD, 300, -7)

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

    if (playG1 == true) {
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

        distanciaBichos = enemyDrone2.x - enemyDrone.x
        // console.log(distanciaBichos)

        // valor para aparecerem a 1ª vez
        if (millis() > 3000) {
            enemyDrone.display()
            enemyDrone.droneMove()
        }

        if (millis() > 6000) {
            enemyDrone2.display()
            enemyDrone2.droneMove()
        }

        counter3 = millis()

        //Counter para os drones aparecerem novamente
        if (enemyDrone.x < -500) {
            counter = millis()
            if (counter - tempo > 5000) {
                tempo = millis();
                enemyDrone.x = width
            }
        }

        if (enemyDrone2.x < -500) {
            counter2 = millis()
            if (counter2 - tempo2 > 5000) {
                tempo2 = millis();
                enemyDrone2.x = width
            }
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

    for (i = 0; i < enemyDrone.x; i++) {

        if (img_x === enemyDrone.imgwidth && img_y === enemyDrone.y) {

            noLoop();
        }
    }

    for (let e of enemies) {
        d = dist(player.x, player.y, e.x, e.y);
        if (d < player.r + e.r) {
            player.die();
        }
    }
}

