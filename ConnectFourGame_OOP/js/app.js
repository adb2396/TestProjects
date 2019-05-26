const game = new Game();

const start = document.getElementById('begin-game');

/**
 * Setup the game form DOM start button
 */
start.addEventListener('click', function() {
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});


/**
 * Listen for keyboard presses
 */
document.addEventListener('keydown', function(event){
    game.handleKeydown(event);
});