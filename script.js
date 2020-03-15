document.addEventListener("DOMContentLoaded", 
    function() {
//        pauseToPlayOnEnd(document.body);
//        pauseToPlayOnPause(document.body);
//        playToPauseOnPlay(document.body);
    }
);

//Audio
let track = document.getElementById('track');
let tracks = [
    'https://chaedmitry.github.io/korean-instruments/sounds/trackGayageum.mp3', //0
    'https://chaedmitry.github.io/korean-instruments/sounds/trackGeomungo.mp3', //1
    '...', //2
    'https://chaedmitry.github.io/korean-instruments/sounds/trackHaegeum.mp3', //3
    'https://chaedmitry.github.io/korean-instruments/sounds/trackJanggo.mp3', //4
    'https://chaedmitry.github.io/korean-instruments/sounds/trackJing.mp3', //5
    'https://chaedmitry.github.io/korean-instruments/sounds/trackBuk.mp3', //6
    'https://chaedmitry.github.io/korean-instruments/sounds/trackKkwaenggwari.mp3', //7
    '...', //8
    'https://chaedmitry.github.io/korean-instruments/sounds/trackDaegeum.mp3', //9
    '...', //10
    'https://chaedmitry.github.io/korean-instruments/sounds/trackDanso.mp3', //11
    'https://chaedmitry.github.io/korean-instruments/sounds/trackHyangPiri.mp3' //12
] 

//Icons
let icons = document.getElementsByTagName('use');
let iconPlay = document.getElementById('icon-play');
let iconPause = document.getElementById('icon-pause');


function playPause(i) {
    if (track.paused) {
        track.src = tracks[i];
        track.play();
    }
    else if (tracks.indexOf(track.src) === i) {
        track.pause();
    }
    else {
        track.src = tracks[i];
        track.play();
    }
}

//Reset all icons to play when some audio ended
/*
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
*/