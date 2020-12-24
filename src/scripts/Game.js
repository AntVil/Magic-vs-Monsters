class Game{
    constructor(){
        this.screenHandler = new ScreenHandler();
        this.inputHandler = new InputHandler();
        this.audioHandler = new AudioHandler();
        this.tileGrid = new TileGrid();
        this.accountHandler = new AccountHandler();

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
        this.screenHandler.setupSelectScreen([1, 2, 3, 4, 5]);
        this.screenHandler.toSelectScreen();
    }

    startEndlessMode(){
        this.screenHandler.setupSelectScreen([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
        this.screenHandler.toSelectScreen();
    }

    update(){
        let elapsedTime = window.performance.now() - this.lastTimeStamp;



        this.lastTimeStamp = window.performance.now()
    }

    render(){

    }
}