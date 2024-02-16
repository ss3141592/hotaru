input.onButtonPressed(Button.A, function () {
    radio.sendString("flash")
})
function flash () {
    basic.showIcon(IconNames.Heart)
    for (let index = 0; index < 10; index++) {
        bright += -25
        led.setBrightness(bright)
        basic.pause(50)
    }
    basic.clearScreen()
    bright = 255
    led.setBrightness(bright)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "flash") {
        basic.pause(randint(50, 3000))
        flash()
        if (randint(0, 2) == 0) {
            basic.pause(500)
            radio.sendString("flash")
        }
    }
})
let bright = 0
radio.setGroup(1)
bright = 255
