document.addEventListener("DOMContentLoaded", 
    function() {
    }
);

//Audio
let track = document.getElementById('track');
let trackList = [
    'https://chaedmitry.github.io/korean-instruments/sounds/trackGayageum.mp3', //0
    'https://chaedmitry.github.io/korean-instruments/sounds/trackGeomungo.mp3', //1
    'https://chaedmitry.github.io/korean-instruments/sounds/trackAjaeng.mp3', //2
    'https://chaedmitry.github.io/korean-instruments/sounds/trackHaegeum.mp3', //3
    'https://chaedmitry.github.io/korean-instruments/sounds/trackJanggo.mp3', //4
    'https://chaedmitry.github.io/korean-instruments/sounds/trackJing.mp3', //5
    'https://chaedmitry.github.io/korean-instruments/sounds/trackBuk.mp3', //6
    'https://chaedmitry.github.io/korean-instruments/sounds/trackKkwaenggwari.mp3', //7
    'https://chaedmitry.github.io/korean-instruments/sounds/trackSogo.mp3', //8
    'https://chaedmitry.github.io/korean-instruments/sounds/trackDaegeum.mp3', //9
    'https://chaedmitry.github.io/korean-instruments/sounds/trackTaepyeongso.mp3', //10
    'https://chaedmitry.github.io/korean-instruments/sounds/trackDanso.mp3', //11
    'https://chaedmitry.github.io/korean-instruments/sounds/trackHyangPiri.mp3' //12
] 

//Icons
let iconList = [
    'iconGayageum',
    'iconGeomungo',
    'iconAjaeng',
    'iconHaegeum',
    'iconJanggo',
    'iconJing',
    'iconBuk',
    'iconKkwaenggwari',
    'iconSogo',
    'iconDaegeum',
    'iconTaepyongso',
    'iconDanso',
    'iconHyangPiri'
]


function playPause(i) {
    if (track.paused) {
        track.src = trackList[i];
        track.play();
    }
    else if (trackList.indexOf(track.src) === i) {
        track.pause();
    }
    else {
        track.src = trackList[i];
        track.play();
    }
}

function swapIconToPause(iconID) {
    if (!track.paused) {
        iconID.setAttribute('href','#icon-pause');
    }
    else {
        iconID.setAttribute('href','#icon-play');
    }
}

/*grid.addEventListener('click', 
    function() {
        iconList.forEach(function(icon) {
            if (icon !== iconID) { 
                icon.setAttribute('href', '#icon-play');
            }
        })
});*/

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