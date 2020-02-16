document.addEventListener("DOMContentLoaded", 
    function() {
        stopAnotherTrack(document.body);
        pauseToPlayOnEnd(document.body);
        pauseToPlayOnPause(document.body);
        playToPauseOnPlay(document.body);
    }
);

let tracks = document.getElementsByTagName('audio');
let icons = document.getElementsByTagName('use');
let iconPlay = document.getElementById('icon-play');
let iconPause = document.getElementById('icon-pause');

function stopAnotherTrack (grid) { /* Stop all other tracks when click on play */
    grid.addEventListener("play",
        function() {
            for (let i = 0; i <= tracks.length; i++) {
                if (tracks[i] !== event.target) {
                    tracks[i].pause();
                    tracks[i].currentTime = 0;
                }
            }   
        },
    true);
}

function pauseToPlayOnEnd (tracks) {  /* Reset all icons to play when some audio ended */
    tracks.addEventListener("ended",
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

function playPause(trackID, iconID) { 
    if (trackID.paused) {
        trackID.play();
        iconID.setAttribute('href', '#icon-pause');
    }
    else {
        trackID.pause();
        iconID.setAttribute('href', '#icon-play');
    }
}

