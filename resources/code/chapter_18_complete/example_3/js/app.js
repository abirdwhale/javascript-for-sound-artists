"use strict";


var audioContext = new AudioContext();

var audioBuffer;

var getSound = new XMLHttpRequest();
getSound.open("get", "sounds/snare.mp3", true);
getSound.responseType = "arraybuffer";

getSound.onload = function() {
    audioContext.decodeAudioData(getSound.response, function(buffer) {
        audioBuffer = buffer;
    });
};

getSound.send();




function playback() {
    var playSound = audioContext.createBufferSource();
    var delayAmount = audioContext.createGain();
    var delay = audioContext.createDelay();
    playSound.buffer = audioBuffer;
    delay.delayTime.value = 0.06;
    delayAmount.gain.value = 0.5;
    playSound.connect(delay);
    delay.connect(delayAmount);
    delayAmount.connect(audioContext.destination);
    playSound.connect(audioContext.destination);
    playSound.start(audioContext.currentTime);
}

window.addEventListener("mousedown", playback);