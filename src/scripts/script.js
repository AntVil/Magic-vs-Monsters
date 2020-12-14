let game;

window.onload = function(){
    game = new Game();
    game.updateSize(window.innerWidth, window.innerHeight);
    game.toLoginScreen();
    
    loop();
}

window.onresize = function(){
    game.updateSize(window.innerWidth, window.innerHeight);
}

function loop(){
    game.update();
    game.render();

    requestAnimationFrame(loop);
}