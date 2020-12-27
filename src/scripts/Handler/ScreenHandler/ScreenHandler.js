class ScreenHandler {
    constructor(game) {
        this.game = game;
        
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

        this.loginScreenHandler = new LoginScreenHandler();
        this.selectScreenHandler = new SelectScreenHandler();
    }

    hideAllScreens() {
        for (let i = 0; i < this.screens.length; i++) {
            this.screens[i].style.visibility = "hidden"
            this.screens[i].style.opacity = 0;
        }
    }

    toLoginScreen() {
        this.hideAllScreens();
        this.loginScreen.style.visibility = "visible"
        this.loginScreen.style.opacity = 1;
    }

    toTitleScreen() {
        this.hideAllScreens();
        this.titleScreen.style.visibility = "visible"
        this.titleScreen.style.opacity = 1;
    }

    toOptionsScreen() {
        this.hideAllScreens();
        this.optionsScreen.style.visibility = "visible"
        this.optionsScreen.style.opacity = 1;
    }

    toAboutScreen() {
        this.hideAllScreens();
        this.aboutScreen.style.visibility = "visible"
        this.aboutScreen.style.opacity = 1;
    }

    toSelectScreen() {
        this.hideAllScreens();
        this.selectScreen.style.visibility = "visible"
        this.selectScreen.style.opacity = 1;
    }

    toInGameScreen() {
        this.hideAllScreens();
        this.inGameScreen.style.visibility = "visible"
        this.inGameScreen.style.opacity = 1;
    }

    getUsername() {
        return this.loginScreenHandler.getUsername();
    }

    setupSelectScreen(selectables){
        this.selectScreenHandler.setup(selectables);
    }

    render(elapsedTime){
        this.selectScreenHandler.render(elapsedTime);
    }
}
