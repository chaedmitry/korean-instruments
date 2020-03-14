document.addEventListener("DOMContentLoaded", 
    function() {
        pauseToPlayOnEnd(document.body);
        pauseToPlayOnPause(document.body);
        playToPauseOnPlay(document.body);
    }
);

//Audio
let track = document.getElementById('track');

//Icons
let icons = document.getElementsByTagName('use');
let iconPlay = document.getElementById('icon-play');
let iconPause = document.getElementById('icon-pause');

//Tracks paths
let trackGayageum = 'sounds/trackGayageum.mp3';
let trackGeomungo = 'sounds/trackGeomungo.mp3';
let trackBuk = 'sounds/trackBuk.mp3';
let trackDaegeum = 'sounds/trackDaegeum.mp3';
let trackDanso = 'sounds/trackDanso.mp3';
let trackHaegeum = 'sounds/trackHaegeum.mp3';
let trackHyangPiri = 'sounds/trackHyangPiri.mp3';
let trackJanggo = 'sounds/trackJanggo.mp3';
let trackJing = 'sounds/trackJing.mp3';
let trackKkwaenggwari = 'sounds/trackKkwaenggwari.mp3';

//Reset all icons to play when some audio ended
function pauseToPlayOnEnd (track) {  
    track.addEventListener("ended",
        function () {
            for (let i = 0; i <= icons.length; i++) {
                icons[i].setAttribute('href',"#icon-play");
            }
    }, true);
}

function pauseToPlayOnPause (icons) {
    icons.addEventListener("pause",
        function () {
            for (let i = 0; i <= icons.length; i++) {
                if (icons[i].getAttribute('href') = "#icon-pause") {
                    icons[i].setAttribute('href',"#icon-play");
                }
            }
    }, true);
}

function playToPauseOnPlay (icons) {
    icons.addEventListener("play",
        function () {
            for (let i = 0; i <= icons.length; i++) {
                if (icons[i].getAttribute('href') = "#icon-play") {
                    icons[i].setAttribute('href',"#icon-pause");
                }
            }
    }, true);
}

function playPause(trackID) { 
        track.src = trackID;
        track.play();
}

