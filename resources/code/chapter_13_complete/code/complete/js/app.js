"use strict";

var sound = audioBatchLoader({

    kick: "sounds/kick.mp3",
    snare: "sounds/snare.mp3",
    hihat: "sounds/hihat.mp3",
    shaker: "sounds/shaker.mp3"

});


window.addEventListener("mousedown", function() {

    sound.snare.play();

});