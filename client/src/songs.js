const songTiles = document.querySelectorAll('.song-tile');
const musicPlayer = document.querySelector('.music-player');
const musicAudio = document.querySelector('.music-player__audio');
const musicSource = document.querySelector('.music-player__source');
const musicTitle = document.querySelector('.music-player__title');
const musicArtist = document.querySelector('.music-player__artist');

songTiles.forEach(tile => {
  tile.addEventListener('click', () => {
    // Get the audio URL, title, and artist from the tile's data attributes
    const audioUrl = tile.dataset.audioUrl;
    const title = tile.dataset.title;
    const artist = tile.dataset.artist;

    // Update the source of the audio file
    musicSource.src = audioUrl;
    musicAudio.load();
    musicAudio.play();

    // Update the display of the music player
    musicPlayer.classList.add('active');
    musicTitle.textContent = title;
    musicArtist.textContent = artist;
  });
});

// Hide the music player after a delay
setTimeout(() => {
  if (musicPlayer.classList.contains('active')) {
    musicPlayer.classList.remove('active');
  }
}, 5000);