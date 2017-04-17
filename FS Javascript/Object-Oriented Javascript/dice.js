function Dice(sides) {
    this.sides = sides;

}

Dice.prototype.roll = function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
} //prototype makes this function available to all Dice instances

var dice = new Dice(6);
var dice10 = new Dice(10);
// var dice = {
//     sides: 6,
//     roll: function () {
//     var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber;
//     }
// } //to run type dice.roll()

// var dice10 = {
//     sides: 10,
//     roll: function () {
//     var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     console.log(randomNumber);
//     }
// } //to run type dice.roll()