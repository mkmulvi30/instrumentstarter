basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.playTone(196, music.beat(BeatFraction.Whole))
    } else if (input.buttonIsPressed(Button.B)) {
        music.playTone(220, music.beat(BeatFraction.Whole))
    } else if (input.isGesture(Gesture.Shake)) {
        music.playTone(247, music.beat(BeatFraction.Whole))
    } else {
    	
    }
})
