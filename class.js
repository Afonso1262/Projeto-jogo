class Hero {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.tempY = this.y;
        this.heroJump = false;

        this.heroCrouch = false;

        this.tempX = this.x;
        this.heroPunch = false;

        this.tamY = 300
        this.tempTamY = this.tamY

        this.width = 150;
        this.tempWidth = this.width;

        this.jumpinterage = true
        this.crouchinterage = true
    }

    display() {
        fill(209, 67, 76)
        rect(this.tempX, this.tempY, this.tempWidth, this.tempTamY)
    }

    //jump

    jump() {
        if (this.heroJump) {
            this.jumpinterage = false
            if (this.tempY > this.y - 70) {
                this.tempY = this.tempY - 6; // quanto maior a subtração mais rápido
            } else {
                this.heroJump = false
            }
        } else if (this.heroJump == false && this.tempY < this.y) {
            this.tempY = this.tempY + 3; // quanto maior a soma mais rápido
        } else {
            this.jumpinterage = true
        }
    }

    activatejump() {
        this.heroJump = true
        interagir = false
    }

    //crouch

    crouch() {
        if (this.heroCrouch) {
            this.crouchinterage = false
            if (this.tempY < this.y + 120) {
                this.tempY = this.tempY + 3.7;
            } else {
                this.heroCrouch = false
            }

            if (this.tempTamY > 100) {
                this.tempTamY = this.tempTamY - 3.5;
            }
        } else if (this.heroCrouch == false && this.tempY > this.y) {
            this.tempY = this.tempY - 3.7;
        }

        if (this.heroCrouch == false && this.tempTamY < this.tamY) {
            this.tempTamY = this.tempTamY + 3.5;
        } else {
            this.crouchinterage = true
        }
    }

    activatecrouch() {
        this.heroCrouch = true
        interagir = false
    }


    //punch

    punch() {
        if (this.heroPunch) {
            if (this.tempWidth < 250) {
                this.tempWidth = this.tempWidth + 6;
            } else {
                this.heroPunch = false
            }
        } else {
            if (this.tempWidth > this.width) {
                this.tempWidth = this.tempWidth - 6;
            }
            console.log()
        }
    }

    activatepunch() {
        this.heroPunch = true
        interagir = false
    }
}

//  fill(209, 67, 76)
//  rect(250, 300, 150, 300)


//-------------------------------------------------------------------------------


// fill(207, 165, 89)
// rect(500, 600, 250, -450)

class Stone {
    constructor(x, y) {
        this.x = this.x
        this.y = this.y

        this.tempoY = -450;
        this.chunkFall = this.tempoY;

        this.posicaoY = 600;

        this.destroyStone = false;
    }

    display() {
        fill(207, 165, 89)
        rect(500, this.posicaoY, 250, this.tempoY)
    }

    destroy() {
        if (this.tempoY < 0) {
            cover = false
        }

        this.tempoY = this.tempoY + 3.5;
    }
}
