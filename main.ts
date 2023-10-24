cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0xffff00)
cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xff0000)
basic.forever(function () {
    basic.showString("COOLBOT!")
})
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
        cuteBot.moveTime(cuteBot.Direction.backward, 5, 3)
    }
})
basic.forever(function () {
    music.play(music.stringPlayable("C5 G - F A G - A ", 150), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(21, 21)
    }
})
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(11, 22)
    }
})
basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(22, 11)
    }
})
