let game;

window.onload = function(){
    game = new Game();
    game.toLogin();
    
    loop();
}

function loop(){
    game.update(window.performance.now());
    game.render(window.performance.now());

    requestAnimationFrame(loop);
}