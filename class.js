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
    }

    display() {
        fill(209, 67, 76)
        rect(this.tempX, this.tempY, this.tempWidth, this.tempTamY)
    }

    //jump

    jump() {
        if (this.heroJump) {
            if (this.tempY > this.y - 70) {
                this.tempY = this.tempY - 6; // quanto maior a subtração mais rápido
            } else {
                this.heroJump = false
            }
        }

        if (this.heroJump == false && this.tempY < this.y) {
            this.tempY = this.tempY + 3; // quanto maior a soma mais rápido
        }
    }

    activatejump() {
        this.heroJump = true
    }

    //crouch

    crouch() {
        if (this.heroCrouch) {
            if (this.tempY < this.y + 120) {
                this.tempY = this.tempY + 3.7;
            } else {
                this.heroCrouch = false
            }

            if (this.tempTamY > 100) {
                this.tempTamY = this.tempTamY - 3.5;
            }
        } else {
            if (this.tempY > this.y) {
                this.tempY = this.tempY - 3.7;
            }

            if (this.tempTamY < this.tamY) {
                this.tempTamY = this.tempTamY + 3.5;
            }
        }
    }

    activatecrouch() {
        this.heroCrouch = true
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
    }
}

//  fill(209, 67, 76)
//  rect(250, 300, 150, 300)


//-------------------------------------------------------------------------------


// fill(207, 165, 89)
// rect(500, 600, 250, -450)

// class Block {
//     constructor(x, y) {

//     }
// }
