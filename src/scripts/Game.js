const SELECTABLE_CARDS = 7;

class Game{
    constructor(){
        this.screenHandler = new ScreenHandler();


        this.screenHandler.toScreen("loginScreen");
    }

    login(){
        let username = this.screenHandler.getUsername().trim();
        if(username.length > 0){

            this.screenHandler.toScreen("titleScreen");
        }
    }

    modeRegular(){


        this.screenHandler.toScreen("selectScreen");
    }

    modeEndless(){
        

        this.screenHandler.toScreen("selectScreen");
    }

    start(){


        this.screenHandler.toScreen("gameScreen");
    }
}
