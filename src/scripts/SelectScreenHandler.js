const COUNTER_PART_ID = Symbol("counter_part_id");

class SelectScreenHandler{
    constructor(){
        this.selectables = [
            new Card(
                "1",
                "2"
            ),
            new Card(
                "2",
                "3"
            ),
            new Card(
                "3",
                "4"
            ),
            new Card(
                "4",
                "5"
            ),
            new Card(
                "5",
                "6"
            ),
            new Card(
                "6",
                "7"
            ),
            new Card(
                "7",
                "8"
            ),
            new Card(
                "8",
                "9"
            ),
            new Card(
                "",
                ""
            ),
            new Card(
                "",
                ""
            ),
            new Card(
                "",
                ""
            ),
            new Card(
                "",
                ""
            ),
            new Card(
                "",
                ""
            ),
            new Card(
                "",
                ""
            ),
            new Card(
                "",
                ""
            ),
            new Card(
                "",
                ""
            ),
            new Card(
                "",
                ""
            ),
            new Card(
                "",
                ""
            ),
        ]

        this.startButton = document.getElementById("startButton");
        this.selectablesElement = document.getElementById("selectables");
        this.selectedElement = document.getElementById("selected");

        this.selectedInfoNameElement = document.getElementById("selectedInfoName");
        this.selectedInfoDescriptionElement = document.getElementById("selectedInfoDescription");

        for(let i=0;i<this.selectables.length;i++){
            this.addSelectable(this.selectables[i], i);
        }

        this.displayInfo(this.selectables[0]);
    }

    createId(index){
        return "selectable_" + index;
    }

    extractIndex(id){
        return parseInt(id.split("_")[1]);
    }

    addSelectable(card, index){
        let button = card.getHTMLButton();
        button.id = this.createId(index);
        button.onclick = function(){
            game.screenHandler.selectScreenHandler.select(this);
        }
        this.selectablesElement.appendChild(button);
    }

    select(cardElement){
        let selectedAmount = this.selectedElement.children.length;
        if(selectedAmount < SELECTABLE_CARDS){
            cardElement.disabled = true;

            let button = document.createElement("button");
            button[COUNTER_PART_ID] = cardElement.id;
            button.onclick = function(){
                game.screenHandler.selectScreenHandler.deselect(this);
            }
            this.selectedElement.appendChild(button);
            
            this.startButton.disabled = !(selectedAmount + 1 == SELECTABLE_CARDS);
        }

        this.displayInfo(this.selectables[this.extractIndex(cardElement.id)])
    }

    deselect(cardElement){
        this.startButton.disabled = true;
        document.getElementById(cardElement[COUNTER_PART_ID]).disabled = false;
        
        cardElement.remove();
        
        this.displayInfo(this.selectables[this.extractIndex(cardElement[COUNTER_PART_ID])])
    }

    displayInfo(card){
        this.selectedInfoNameElement.innerText = card.name;
        this.selectedInfoDescriptionElement.innerText = card.description;
    }

    getSelectedCards(){
        let result = [];
        let selected = this.selectedElement.children
        for(let i=0;i<selected.length;i++){
            let index = this.extractIndex(selected[i][COUNTER_PART_ID]);
            result.push(this.selectables[index]);
        }
        return result;
    }
}