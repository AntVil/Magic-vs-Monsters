let game;

window.onload = function(){
    game = new Game();
}

function loop(){



    requestAnimationFrame(loop);
}