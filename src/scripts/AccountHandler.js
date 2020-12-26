class AccountHandler{
    constructor(game) {
        this.game = game;
        
        this.username = "unknown";
    }

    user(username){
        this.username = username;
    }
}