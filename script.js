//Audio
let track = document.getElementById('track');
let trackList = [
    'https://chaedmitry.github.io/korean-instruments/sounds/trackGayageum.mp3', //0
    'https://chaedmitry.github.io/korean-instruments/sounds/trackGeomungo.mp3', //1
    'https://chaedmitry.github.io/korean-instruments/sounds/trackAjaeng.mp3', //2
    'https://chaedmitry.github.io/korean-instruments/sounds/trackHaegeum.mp3', //3
    'https://chaedmitry.github.io/korean-instruments/sounds/trackHyangBipa.mp3', //4
    'https://chaedmitry.github.io/korean-instruments/sounds/trackJanggo.mp3', //5
    'https://chaedmitry.github.io/korean-instruments/sounds/trackJing.mp3', //6
    'https://chaedmitry.github.io/korean-instruments/sounds/trackBuk.mp3', //7
    'https://chaedmitry.github.io/korean-instruments/sounds/trackKkwaenggwari.mp3', //8
    'https://chaedmitry.github.io/korean-instruments/sounds/trackSogo.mp3', //9
    'https://chaedmitry.github.io/korean-instruments/sounds/trackDaegeum.mp3', //10
    'https://chaedmitry.github.io/korean-instruments/sounds/trackTaepyeongso.mp3', //11
    'https://chaedmitry.github.io/korean-instruments/sounds/trackDanso.mp3', //12
    'https://chaedmitry.github.io/korean-instruments/sounds/trackHyangPiri.mp3' //13
] 

// Icons
let iconList = [
    'iconGayageum',
    'iconGeomungo',
    'iconAjaeng',
    'iconHaegeum',
    'iconBipa',
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

playPause = (i) => {
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

swapIcon = (iconID) => {
    if (!track.paused) {
        document.getElementById(iconID).setAttribute('href','#icon-pause');
        iconList.forEach(icon => {
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
track.addEventListener('ended', e => {
    iconList.forEach(icon => {
        document.getElementById(icon).setAttribute('href', '#icon-play');
    })
})

// Listening clicks on instruments
document.querySelector('li[data-instrument="gayageum"]').addEventListener('click', () => {playPause(0);swapIcon('iconGayageum');});
document.querySelector('li[data-instrument="geomungo"]').addEventListener('click', () => {playPause(1);swapIcon('iconGeomungo');});
document.querySelector('li[data-instrument="ajaeng"]').addEventListener('click', () => {playPause(2);swapIcon('iconAjaeng');});
document.querySelector('li[data-instrument="haegeum"]').addEventListener('click', () => {playPause(3);swapIcon('iconHaegeum');});
document.querySelector('li[data-instrument="hyangbipa"]').addEventListener('click', () => {playPause(4);swapIcon('iconBipa');});
document.querySelector('li[data-instrument="janggo"]').addEventListener('click', () => {playPause(5);swapIcon('iconJanggo');});
document.querySelector('li[data-instrument="jing"]').addEventListener('click', () => {playPause(6);swapIcon('iconJing');});
document.querySelector('li[data-instrument="buk"]').addEventListener('click', () => {playPause(7);swapIcon('iconBuk');});
document.querySelector('li[data-instrument="kkwaenggwari"]').addEventListener('click', () => {playPause(8);swapIcon('iconKkwaenggwari');});
document.querySelector('li[data-instrument="sogo"]').addEventListener('click', () => {playPause(9);swapIcon('iconSogo');});
document.querySelector('li[data-instrument="daegeum"]').addEventListener('click', () => {playPause(10);swapIcon('iconDaegeum');});
document.querySelector('li[data-instrument="taepyeongso"]').addEventListener('click', () => {playPause(11);swapIcon('iconTaepyongso');});
document.querySelector('li[data-instrument="danso"]').addEventListener('click', () => {playPause(12);swapIcon('iconDanso');});
document.querySelector('li[data-instrument="hyangpiri"]').addEventListener('click', () => {playPause(13);swapIcon('iconHyangPiri');});