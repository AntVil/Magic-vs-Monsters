let game;

window.onload = function(){
    game = new Game();
    game.toLogin();
    
    loop();
}

function loop(){
    game.update();
    game.render();

    requestAnimationFrame(loop);
}