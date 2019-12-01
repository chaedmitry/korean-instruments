document.addEventListener("DOMContentLoaded", 
    function() {
        pauseAllTracks(document.body);
    }
);
  
function pauseAllTracks (grid) {
    grid.addEventListener("play",
        function() {
        let allTracks = document.getElementsByTagName('audio');
            for (let i = 0; i <= allTracks.length; i++) {
            let track = allTracks[i]; 
                if (track !== event.target) {
                    track.pause();
                    track.currentTime = 0;
                }
            }   
        },
    true);
}

  function playPause(id) {
    id.paused ? id.play() : id.pause();
}
