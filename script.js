//Audio
const track = document.getElementById('track');
const trackList = [
    'sounds/trackGayageum.mp3', //0
    'sounds/trackGeomungo.mp3', //1
    'sounds/trackAjaeng.mp3', //2
    'sounds/trackHaegeum.mp3', //3
    'sounds/trackHyangBipa.mp3', //4
    'sounds/trackJanggo.mp3', //5
    'sounds/trackJing.mp3', //6
    'sounds/trackBuk.mp3', //7
    'sounds/trackKkwaenggwari.mp3', //8
    'sounds/trackSogo.mp3', //9
    'sounds/trackDaegeum.mp3', //10
    'sounds/trackTaepyeongso.mp3', //11
    'sounds/trackDanso.mp3', //12
    'sounds/trackHyangPiri.mp3' //13
];

// Instrument mapping
const instruments = [
    { name: 'gayageum', index: 0, icon: 'iconGayageum' },
    { name: 'geomungo', index: 1, icon: 'iconGeomungo' },
    { name: 'ajaeng', index: 2, icon: 'iconAjaeng' },
    { name: 'haegeum', index: 3, icon: 'iconHaegeum' },
    { name: 'hyangbipa', index: 4, icon: 'iconBipa' },
    { name: 'janggo', index: 5, icon: 'iconJanggo' },
    { name: 'jing', index: 6, icon: 'iconJing' },
    { name: 'buk', index: 7, icon: 'iconBuk' },
    { name: 'kkwaenggwari', index: 8, icon: 'iconKkwaenggwari' },
    { name: 'sogo', index: 9, icon: 'iconSogo' },
    { name: 'daegeum', index: 10, icon: 'iconDaegeum' },
    { name: 'taepyeongso', index: 11, icon: 'iconTaepyongso' },
    { name: 'danso', index: 12, icon: 'iconDanso' },
    { name: 'hyangpiri', index: 13, icon: 'iconHyangPiri' }
];

const playPause = (i) => {
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
};

const swapIcon = (iconID) => {
    if (!track.paused) {
        document.getElementById(iconID).setAttribute('href','#icon-pause');
        instruments.forEach(instrument => {
            if (instrument.icon !== iconID) {
                document.getElementById(instrument.icon).setAttribute('href', '#icon-play');
            }
        });
    }
    else {
        document.getElementById(iconID).setAttribute('href','#icon-play');
    }
};

// Swap all icons to "Play" when track is ended
track.addEventListener('ended', e => {
    instruments.forEach(instrument => {
        document.getElementById(instrument.icon).setAttribute('href', '#icon-play');
    });
});

// Event delegation for instrument clicks
document.getElementById('grid').addEventListener('click', (e) => {
    const gridItem = e.target.closest('.grid-item');
    if (!gridItem) return;
    
    const instrumentName = gridItem.dataset.instrument;
    const instrument = instruments.find(inst => inst.name === instrumentName);
    
    if (instrument) {
        playPause(instrument.index);
        swapIcon(instrument.icon);
    }
});