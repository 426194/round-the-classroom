radio.onReceivedNumber(function (receivedNumber) {
    radio.setTransmitPower(7)
    radio.setGroup(4)
    basic.pause(500)
    radio.sendNumber(receivedNumber)
})
radio.setGroup(3)
basic.forever(function () {
	
})
