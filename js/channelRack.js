class ChannelRack {
    constructor() {
        this.instruments = [];
        this.patterns = [];
    }

    addInstrument(instrument) {
        this.instruments.push(instrument);
    }

    removeInstrument(instrument) {
        const index = this.instruments.indexOf(instrument);
        if (index === -1) {
            throw new Error("Instrument not found");
        }
        this.instruments.splice(index, 1);
    }

    createPattern(pattern) {
        this.patterns.push(pattern);
    }

    savePattern(pattern) {
        // Logic to save pattern
    }

    loadPattern(pattern) {
        // Logic to load pattern
    }
}
