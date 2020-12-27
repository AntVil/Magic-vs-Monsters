class LoginScreenHandler{
    constructor(){
        this.usernameInput = document.getElementById("loginScreenUsernameInput");
    }

    getUsername() {
        return this.usernameInput.value.trim();
    }
}