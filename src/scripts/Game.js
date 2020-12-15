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

        this.username;

        this.lastTimeStamp = window.performance.now();
    }

    hideAllScreens(){
        for(let i=0;i<this.screens.length;i++){
            this.screens[i].style.visibility = "hidden"
            this.screens[i].style.opacity = 0;
        }
    }

    toLoginScreen(){
        let storedName = localStorage.getItem("username");
        if(storedName === null || storedName === undefined){
            this.hideAllScreens();
            this.loginScreen.style.visibility = "visible"
            this.loginScreen.style.opacity = 1;
        }else{
            this.username = storedName;
            this.toTitleScreen();
        }
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

    updateSize(w, h){
        this.screenWidth = Math.min(w, h / this.aspectRatio[0] * this.aspectRatio[1]);
        this.screenHeight = this.screenWidth * this.aspectRatio[0] / this.aspectRatio[1];
        for(let i=0;i<this.screens.length;i++){
            this.screens[i].style.width = `${this.screenWidth}px`;
            this.screens[i].style.height = `${this.screenHeight}px`;
        }
    }

    login(){
        let name = this.usernameInput.value.trim();
        if(name !== ""){
            this.username = name;
            localStorage.setItem("username", this.username);
            this.toTitleScreen();
        }
    }

    startStoryMode(){

    }

    startEndlessMode(){

    }

    update(){
        let elapsedTime = window.performance.now() - this.lastTimeStamp;



        this.lastTimeStamp = window.performance.now()
    }

    render(){

    }
}