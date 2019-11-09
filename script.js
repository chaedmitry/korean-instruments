let sound = document.getElementById('track-gayageum');

function playPause() {
    sound.paused ? sound.play() : sound.pause();
}