radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
    if (receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    }
    if (receivedNumber == 4) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 125)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 125)
    }
    if (receivedNumber == 5) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 125)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 125)
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(5)
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(4)
})
radio.setGroup(1)
basic.forever(function () {
	
})
