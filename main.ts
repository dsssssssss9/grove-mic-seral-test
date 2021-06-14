basic.forever(function () {
    serial.writeValue("Vol", pins.analogReadPin(AnalogPin.P1))
})
