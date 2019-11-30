document.addEventListener("DOMContentLoaded", function() {
    pauseAllTracks(document.body);
  });
  
  function pauseAllTracks (grid) {
    grid.addEventListener("play", function(event) {
    let allTracks = document.getElementsByTagName('audio');
        for (let i = 0; i <= allTracks.length; i++) { 
            if (allTracks[i] !== event.target) {
                allTracks[i].pause();
                allTracks[i].currentTime = 0;
            }
        }
    }, true);
}

  function playPause(id) {
    id.paused ? id.play() : id.pause();
}
