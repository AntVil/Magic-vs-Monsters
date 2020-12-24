class ScreenHandler {
    constructor() {
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


        this.loginScreenUsernameInput = document.getElementById("loginScreenUsernameInput");

        this.selectScreenSelected = document.getElementById("selectScreenSelected");
        this.selectScreenSelectionInfo = document.getElementById("selectScreenSelectionInfo");
        this.selectScreenSelectionCanvas = document.getElementById("selectScreenSelectionCanvas");
        this.selectScreenSelectables = document.getElementById("selectScreenSelectables");
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
        return this.loginScreenUsernameInput.value.trim();
    }

    setupSelectScreen(selectables) {
        this.selectScreenSelected.innerHTML = "";
        this.selectScreenSelectionInfo.innerHTML = "";
        this.selectScreenSelectables.innerHTML = "";
        for (var i = 0; i < selectables.length; i++) {
            var selectable = document.createElement("button");
            selectable.id = "selectScreenSelectables" + i;
            selectable.classList.add("selectable");
            selectScreenSelectables.appendChild(selectable);
        }
    }
}
