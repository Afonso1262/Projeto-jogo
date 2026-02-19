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


let distanciaBichos

let playG1 = true
let win = false

let penSize = 1;
let penState = 0;

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

    enemyDrone = new Enemy(width, 500, -7)
    enemyDrone2 = new Enemy(width, 300, -7)

    tempo = millis()
    tempo2 = millis()

    counter = millis()
    counter2 = millis()

    tempo3 = millis()
    counter3 = millis()

}

function draw() {

    if (playG1 == false && win == false) {
        background(0)
        fill(255)
        text("GAME OVER", 450, 400)
        textSize(50)
        textAlign(CENTER)

    }

    if (playG1 == true && win == false) {
        background(200, 221, 227)
        noStroke()
        fill(102, 81, 65)
        rect(0, 600, windowWidth, height - 400)

        //boneco
        image(imagemEscolhida, img_x, img_y, img_w, img_h)

        // estatua
        image(img, 400, 126, 470, -486)

        // coberta da estatua
        if (cover == true) {
            statueStone.display()
        } else { win = true }

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
        if (enemyDrone.x < -900) {
            counter = millis()
            if (counter - tempo > 7000) {
                tempo = millis();
                enemyDrone.x = width
            }
        }

        if (enemyDrone2.x < -500) {
            counter2 = millis()
            if (counter2 - tempo2 > 7000) {
                tempo2 = millis();
                enemyDrone2.x = width
            }
        }

        if (counter3 - tempo3 > 500) {
            //imagem original quando o cronometro atinge um valor
            imagemEscolhida = img2
            img_y = 300
            img_h = 300
            img_w = 150
            interage = true
        }


        let d1 = dist(enemyDrone.x, enemyDrone.y, img_x, img_y);
        if (d1 < 201) {
            //console.log('perdeu')
            playG1 = false
        }

        let d2 = dist(enemyDrone2.x, enemyDrone2.y, img_x, img_y);
        if (d2 < 30) {
            //console.log('perdeu')
            playG1 = false
        }

    }

    if (win == true) {
        background(255, 251, 245)

        if (mouseIsPressed) {
            if (penState == 0) {
                line(mouseX, mouseY, pmouseX, pmouseY);
            }

            if (penState == 1) {
                ellipse(mouseX, mouseY, 10, 10);
            }

            if (penState == 2) {
                line(mouseX - 5, mouseY - 5, mouseX + 5, mouseY + 5);
                line(mouseX + 5, mouseY - 5, mouseX - 5, mouseY + 5);
            }
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

    if (win == true) {
        if (keyCode == LEFT_ARROW && penSize > 1) {
            penSize -= 1;
        }

        if (keyCode == RIGHT_ARROW) {
            penSize += 1;
        }

        strokeWeight(penSize);
    }
}

function keyTyped() {
    if (win == true) {

        if (key == 'c') {
            background(255);
        }

        if (key == 'r') {
            stroke(255, 0, 0);
        }

        if (key == 'b') {
            stroke(0, 0, 255);
        }
    }
}

