class PlaylistMaker {
    constructor() {
        this.patterns = [];
        this.songs = [];
    }

    addPattern(pattern) {
        this.patterns.push(pattern);
    }

    removePattern(pattern) {
        const index = this.patterns.indexOf(pattern);
        if (index > -1) {
            this.patterns.splice(index, 1);
        }
    }

    createSong(song) {
        this.songs.push(song);
    }

    saveSong(song) {
        // Logic to save song
    }

    loadSong(song) {
        // Logic to load song
    }
}