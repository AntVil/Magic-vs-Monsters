class TileGrid {
    constructor(game) {
        this.game = game;

    }

    getPlayables() {
        return [new Playable(), new Playable(), new Playable(), new Playable(), new Playable(), new Playable(), new Playable(), new Playable(), new Playable(), new Playable(), new Playable(), new Playable(), new Playable(), new Playable(), new Playable(), new Playable(), new Playable(), new Playable()];
    }
}


class Playable {
    constructor() {
        this.name = "Name";
        this.description = "Description";
        this.icon = "";
        this.animationFrames = [];
    }
}