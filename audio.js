class AudioPlayer {

    constructor() {
        this.player = new Audio();
    }

    pause() {
        if(!this.player.paused) {
            this.player.pause();
        }
    }

    play(audioFile) {
        this.pause();

        const artwork = document.createElement('img');
        artwork.src = audioFile.artworkUrl100;

        const playerContainer = document.querySelector('.player');
        playerContainer.innerHTML = '';
        playerContainer.appendChild(artwork);


        this.player.src = audioFile.previewUrl;
        this.player.play();
    }
}
