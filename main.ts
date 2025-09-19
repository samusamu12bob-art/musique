let line0 = 0
let line1 = 0
let line2 = 0
basic.forever(function () {
    line0 = pins.digitalReadPin(DigitalPin.P0)
    line1 = pins.digitalReadPin(DigitalPin.P1)
    line2 = pins.digitalReadPin(DigitalPin.P2)
    if (line0 || (line1 || line2)) {
        basic.pause(30)
        line0 = pins.digitalReadPin(DigitalPin.P0)
        line1 = pins.digitalReadPin(DigitalPin.P1)
        line2 = pins.digitalReadPin(DigitalPin.P2)
    }
    if (!(line0 && !(line1 && line2))) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (!(line0 && !(line2 && line1))) {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (!(line0 && (line1 && line2))) {
        music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (!(line1 && !(line2 && line0))) {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (!(line1 && (line0 && line2))) {
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (!(line2 && (line0 && line1))) {
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
    if (line0 && !(line1 && line2)) {
        music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
