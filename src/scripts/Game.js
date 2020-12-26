class Game{
    constructor(){
        this.screenHandler = new ScreenHandler(this);
        this.inputHandler = new InputHandler(this);
        this.audioHandler = new AudioHandler(this);
        this.tileGrid = new TileGrid(this);
        this.accountHandler = new AccountHandler(this);

        this.lastTimeStamp = window.performance.now();
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
        let selectables = this.tileGrid.getPlayables();
        this.screenHandler.setupSelectScreen(selectables);
        this.screenHandler.toSelectScreen();
    }

    startEndlessMode(){
        let selectables = this.tileGrid.getPlayables();
        this.screenHandler.setupSelectScreen(selectables);
        this.screenHandler.toSelectScreen();
    }

    update(){
        let elapsedTime = window.performance.now() - this.lastTimeStamp;



        this.lastTimeStamp = window.performance.now()
    }

    render(){

    }
}