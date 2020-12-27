class ManaSummon{
    constructor() {
        this.name = "ManaSummon";
        this.description = "A Mana-Summon generates Mana in intervals.";

        this.frames = [];

        for(let i=0;i<4;i++){
            let image = new Image();
            image.src = `./images/animations/ManaSummon/ManaSummon${i}.png`;
            this.frames.push(image);
        }
    }

    getName(){
        return this.name;
    }

    getDescription(){
        return this.description;
    }

    getFrame(elapsedTime){
        let index = Math.round(elapsedTime / 200) % this.frames.length;
        return this.frames[index];
    }
}