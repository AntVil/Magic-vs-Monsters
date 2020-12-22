class Game{
    constructor(){
        this.screenWidth = 0;
        this.screenHeight = 0;

        this.aspectRatio = [9, 16];

        this.loginScreen = document.getElementById("loginScreen");
        this.titleScreen = document.getElementById("titleScreen");
        this.optionsScreen = document.getElementById("optionsScreen");
        this.aboutScreen = document.getElementById("aboutScreen");
        this.selectScreen = document.getElementById("selectScreen");
        this.inGameScreen = document.getElementById("inGameScreen");

        this.screens = [
            this.loginScreen,
            this.titleScreen,
            this.optionsScreen,
            this.aboutScreen,
            this.selectScreen,
            this.inGameScreen
        ];

        this.usernameInput = document.getElementById("usernameInput");

        this.username = "username";

        this.lastTimeStamp = window.performance.now();
    }

    hideAllScreens(){
        for(let i=0;i<this.screens.length;i++){
            this.screens[i].style.visibility = "hidden"
            this.screens[i].style.opacity = 0;
        }
    }

    toLoginScreen(){
        this.hideAllScreens();
        this.loginScreen.style.visibility = "visible"
        this.loginScreen.style.opacity = 1;
    }

    toTitleScreen(){
        this.hideAllScreens();
        this.titleScreen.style.visibility = "visible"
        this.titleScreen.style.opacity = 1;
    }

    toOptionsScreen(){
        this.hideAllScreens();
        this.optionsScreen.style.visibility = "visible"
        this.optionsScreen.style.opacity = 1;
    }

    toAboutScreen(){
        this.hideAllScreens();
        this.aboutScreen.style.visibility = "visible"
        this.aboutScreen.style.opacity = 1;
    }

    toSelectScreen(){
        this.hideAllScreens();
        this.selectScreen.style.visibility = "visible"
        this.selectScreen.style.opacity = 1;
    }

    toInGameScreen(){
        this.hideAllScreens();
        this.inGameScreen.style.visibility = "visible"
        this.inGameScreen.style.opacity = 1;
    }

    login(){
        let name = this.usernameInput.value.trim();
        if(name !== ""){
            this.username = name;
            this.toTitleScreen();
        }
    }

    startStoryMode(){

    }

    startEndlessMode(){
        this.toSelectScreen();
    }

    update(){
        let elapsedTime = window.performance.now() - this.lastTimeStamp;



        this.lastTimeStamp = window.performance.now()
    }

    render(){

    }
}