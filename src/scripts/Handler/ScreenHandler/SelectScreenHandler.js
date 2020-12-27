const SelectScreenHandlerSymbol = Symbol("SelectScreenHandler");
const counterpartIdSymbol = Symbol("counterpartId");
const playableSymbol = Symbol("playable");

class SelectScreenHandler {
    constructor() {
        this.selected = document.getElementById("selectScreenSelected");
        this.selectionInfo = document.getElementById("selectScreenSelectionInfo");
        this.selectionCanvas = document.getElementById("selectScreenSelectionCanvas");
        this.selectionCanvas.width = 1024;
        this.selectionCanvas.height = 1024;
        this.selectionCanvasContext = this.selectionCanvas.getContext("2d");
        this.selectionCanvasContext.imageSmoothingEnabled = false;
        this.selectables = document.getElementById("selectScreenSelectables");
        this.doneButton = document.getElementById("selectScreenDoneButton");

        this.MAXIMUM_SELECTED = 6;
        this.selectedAmount = 0;

        this.currentlySelected = null;
    }

    setup(selectables) {
        this.selected.innerHTML = "";
        this.selectionInfo.innerHTML = "";
        this.selectables.innerHTML = "";
        for (let i = 0; i < selectables.length; i++) {
            let selectable = document.createElement("button");
            selectable.classList.add("selectable");
            selectable.classList.add("choosable");

            selectable.id = "selectScreenSelectables-" + i;
            selectable[counterpartIdSymbol] = "selectScreenSelected-" + i;

            selectable.style.backgroundImage = `url("./images/icons/cardIcons/${selectables[i].getName()}.png")`;

            selectable[playableSymbol] = selectables[i];

            selectable[SelectScreenHandlerSymbol] = this;
            selectable.onclick = function () {
                this[SelectScreenHandlerSymbol].select(this);
            }

            this.selectables.appendChild(selectable);
        }

        this.selectedAmount = 0;
        
        this.currentlySelected = null;
        this.selectionCanvasContext.clearRect(0, 0, this.selectionCanvas.width, this.selectionCanvas.height);
    }

    select(element) {
        if (this.selectedAmount < this.MAXIMUM_SELECTED && element.classList.contains("choosable")) {
            element.classList.remove("choosable");

            let selected = document.createElement("button");
            selected.classList.add("selectable");
            selected.id = element[counterpartIdSymbol];
            selected[counterpartIdSymbol] = element.id;

            selected.style.backgroundImage = element.style.backgroundImage;

            selected[SelectScreenHandlerSymbol] = this;
            selected.onclick = function () {
                this[SelectScreenHandlerSymbol].deselect(this);
            }

            this.selected.appendChild(selected);
            this.selectedAmount++;
            if(this.selectedAmount === this.MAXIMUM_SELECTED){
                this.doneButton.disabled = false;
            }
        }

        this.selectionInfo.innerText = element[playableSymbol].getDescription();
        this.currentlySelected = element[playableSymbol];
    }

    deselect(element) {
        element.remove();
        document.getElementById(element[counterpartIdSymbol]).classList.add("choosable");
        this.selectedAmount--;
        this.doneButton.disabled = true;
    }

    render(elapsedTime) {
        if (this.currentlySelected !== null) {
            this.selectionCanvasContext.clearRect(0, 0, this.selectionCanvas.width, this.selectionCanvas.height);

            let image = this.currentlySelected.getFrame(elapsedTime);
            this.selectionCanvasContext.drawImage(image, 0, 0, this.selectionCanvas.width, this.selectionCanvas.height);
        }
    }
}