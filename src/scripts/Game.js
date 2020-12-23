class Game{
    constructor(){
        this.screenHandler = new ScreenHandler();
        this.inputHandler = new InputHandler();
        this.audioHandler = new AudioHandler();
        this.tileGrid = new TileGrid();

        this.usernameInput = document.getElementById("usernameInput");

        this.username = "username";

        this.lastTimeStamp = window.performance.now();
    }

    toLogin(){
        this.screenHandler.toLoginScreen();
    }

    login(){
        let name = this.usernameInput.value.trim();
        if(name !== ""){
            this.username = name;
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
        this.screenHandler.toSelectScreen();
    }

    startEndlessMode(){
        this.screenHandler.toSelectScreen();
    }

    update(){
        let elapsedTime = window.performance.now() - this.lastTimeStamp;



        this.lastTimeStamp = window.performance.now()
    }

    render(){

    }
}