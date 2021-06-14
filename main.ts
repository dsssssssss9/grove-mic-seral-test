let colorbit_51bit = colorbit.initColorBit(DigitalPin.P2, BitColorMode.RGB)
colorbit_51bit.clear()
colorbit_51bit.showColorIcon(ColorIcon.ChristmasTree, colorbit.colors(BitColors.Red))
basic.pause(200)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) >= 13) {
        colorbit_51bit.showBarGraph(pins.analogReadPin(AnalogPin.P1), 1023)
    } else {
        colorbit_51bit.clear()
    }
})
