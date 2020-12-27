class Game{
    constructor(){
        this.screenHandler = new ScreenHandler(this);
        this.inputHandler = new InputHandler(this);
        this.audioHandler = new AudioHandler(this);
        this.tileGridHandler = new TileGridHandler(this);
        this.accountHandler = new AccountHandler(this);
    }

    toLogin(){
        this.screenHandler.toLoginScreen();
    }

    login(){
        let name = this.screenHandler.getUsername();
        if(name !== ""){
            this.accountHandler.user(name);
            this.toTitle();
        }
    }

    toTitle(){
        this.screenHandler.toTitleScreen();
    }

    toOptions(){
        this.screenHandler.toOptionsScreen();
    }

    toAbout(){
        this.screenHandler.toAboutScreen();
    }

    startStoryMode(){
        let selectables = this.tileGridHandler.getPlayables();
        this.screenHandler.setupSelectScreen(selectables);
        this.screenHandler.toSelectScreen();
    }

    startEndlessMode(){
        let selectables = this.tileGridHandler.getPlayables();
        this.screenHandler.setupSelectScreen(selectables);
        this.screenHandler.toSelectScreen();
    }

    commitSelection(){
        this.screenHandler.toInGameScreen();
    }

    update(elapsedTime){
        
    }

    render(elapsedTime){
        this.screenHandler.render(elapsedTime);
    }
}