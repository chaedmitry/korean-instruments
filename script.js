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

function swapIcon(iconID) {
    if (!track.paused) {
        document.getElementById(iconID).setAttribute('href','#icon-pause');
        iconList.forEach(function(icon) {
            if (icon !== iconID) {
                document.getElementById(icon).setAttribute('href', '#icon-play');
            }
        });
    }
    else {
        document.getElementById(iconID).setAttribute('href','#icon-play');
    }
}
// Swap all icons to "Play" when track is ended
track.addEventListener('ended', function(){
    iconList.forEach(function(icon) {
        document.getElementById(icon).setAttribute('href', '#icon-play');
    })
})