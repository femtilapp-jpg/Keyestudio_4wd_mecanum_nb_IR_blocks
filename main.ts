let val = 0
irRemote.connectInfrared(DigitalPin.P0)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    val = irRemote.returnIrButton()
    serial.writeValue("IR", val)
    basic.pause(1000)
})
