var audioContext = new AudioContext()
var impulseResponseBuffer;
var getSound = new XMLHttpRequest();
getSound.open("get", "sounds/impulse.wav", true); // impulse file
getSound.responseType = "arraybuffer";

getSound.onload = function() {
    audioContext.decodeAudioData(getSound.response, function(buffer) {
        impulseResponseBuffer = buffer;
    });
};
getSound.send();