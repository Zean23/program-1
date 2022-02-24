let Number_of_balls = 0
let Number_of_strikes = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(4)
    Number_of_balls = 4
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(3)
    Number_of_strikes += 3
})
basic.forever(function () {
	
})
