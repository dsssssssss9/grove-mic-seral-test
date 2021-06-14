let colorbit_51bit = colorbit.initColorBit(DigitalPin.P2, BitColorMode.RGB)
colorbit_51bit.clear()
colorbit_51bit.showColorIcon(ColorIcon.ChristmasTree, colorbit.colors(BitColors.Red))
basic.pause(1000)
basic.forever(function () {
    while (pins.analogReadPin(AnalogPin.P1) >= 13) {
        colorbit_51bit.showBarGraph(pins.analogReadPin(AnalogPin.P1), 255)
    }
})
