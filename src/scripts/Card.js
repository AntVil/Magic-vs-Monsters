class Card{
    constructor(name, description){
        this.name = name;
        this.description = description;
    }

    getHTMLButton(){
        let button = document.createElement("button");
        button.id = this.id;
        return button;
    }
}