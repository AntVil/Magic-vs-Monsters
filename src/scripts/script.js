let game;

window.onload = function(){
    game = new Game();
    game.toLoginScreen();
    
    loop();
}

function loop(){
    game.update();
    game.render();

    requestAnimationFrame(loop);
}