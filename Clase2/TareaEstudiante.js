const studentJohn = {
    name: 'John',
    surname: 'Doe',
    record: 2048,
    scores: [8, 9, 10, 9, 7],
    toString: function () {
        return (
            `{ name = "${this.name}",\n` +
            `  surname = "${this.surname}",\n` +
            `  record = ${this.record},\n` +
            `  scores = [${this.scores}]\n` +
            `}`
        )
    },
    scoreAverage: function () {
        return (
            this.scores.reduce((previousScore, nextScore) => previousScore + nextScore) /
            this.scores.length
        )
    },
    compareAverage: function (otherStudent) {
        this.scoreAverage() > otherStudent.scoreAverage()
            ? console.log(this.toString())
            : console.log(otherStudent.toString())
    }
}

const studentJane = { ...studentJohn }
studentJane.name = 'Jane'
studentJane.surname = 'Mary'
studentJane.record = 1024
studentJane.scores = [5, 6, 8, 7, 9]
 
studentJohn.compareAverage(studentJane)
