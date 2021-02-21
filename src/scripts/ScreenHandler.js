class ScreenHandler{
    constructor(){
        this.screenElements = [
            document.getElementById("loginScreen"),
            document.getElementById("titleScreen"),
            document.getElementById("selectScreen"),
            document.getElementById("gameScreen"),
            document.getElementById("aboutScreen"),
        ];

        this.usernameInputElement = document.getElementById("usernameInput");

        this.selectScreenHandler = new SelectScreenHandler();
    }

    toScreen(screen){
        for(let i=0;i<this.screenElements.length;i++){
            if(this.screenElements[i].id == screen){
                this.screenElements[i].style.visibility = "visible";
            }else{
                this.screenElements[i].style.visibility = "hidden";
            }
        }

        if(screen == "gameScreen"){
            console.log(this.selectScreenHandler.getSelectedCards());
        }
    }

    getUsername(){
        return this.usernameInputElement.value;
    }

    displayOptions(){

    }
}