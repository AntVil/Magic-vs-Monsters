class ScreenHandler{
    constructor(){
        this.screens = [
            document.getElementById("loginScreen"),
            document.getElementById("titleScreen"),
            document.getElementById("gameScreen"),
            document.getElementById("aboutScreen"),
        ];

        this.usernameInput = document.getElementById("usernameInput");
    }

    toScreen(screen){
        for(let i=0;i<this.screens.length;i++){
            if(this.screens[i].id == screen){
                this.screens[i].style.visibility = "visible";
            }else{
                this.screens[i].style.visibility = "hidden";
            }
        }
    }

    getUsername(){
        return this.usernameInput.value;
    }

    displayOptions(){

    }
}