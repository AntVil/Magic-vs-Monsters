class TileGridHandler {
    constructor(game) {
        this.game = game;

    }

    getPlayables() {
        return [new ManaSummon(), new ManaSummon(), new ManaSummon(), new ManaSummon(), new ManaSummon(), new ManaSummon(), new ManaSummon(), new ManaSummon(), new ManaSummon(), new ManaSummon(), new ManaSummon(), new ManaSummon(), new ManaSummon(), new ManaSummon(), new ManaSummon(), new ManaSummon(), new ManaSummon(), new ManaSummon()];
    }
}
