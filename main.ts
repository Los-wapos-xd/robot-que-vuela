radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        while (receivedNumber == 2) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        }
    }
    if (receivedNumber == 3) {
        while (receivedNumber == 3) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        }
    }
    if (receivedNumber == 4) {
        while (receivedNumber == 4) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 125)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 125)
        }
    }
    if (receivedNumber == 5) {
        while (receivedNumber == 5) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 125)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 125)
        }
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendNumber(3)
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendNumber(2)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(5)
})
radio.setGroup(1)
