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

    startRegular(){


        this.screenHandler.toScreen("selectScreen");
    }

    startEndless(){
        

        this.screenHandler.toScreen("selectScreen");
    }
}
