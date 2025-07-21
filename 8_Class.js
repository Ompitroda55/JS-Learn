class Ball {
    constructor(sport, type) {
        this.sport = sport
        this.type = type
    }

    getBallInfo() {
        return `Ball sport is ${this.sport} and type is ${this.type}`
    }
}

const myBall = new Ball("Cricket", "Hard")
console.log(myBall.getBallInfo())