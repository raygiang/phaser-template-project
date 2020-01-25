import 'phaser';
import GameScreen from './scenes/GameScreen';

window.addEventListener( 'load', () => {
	const game = new Phaser.Game( {
	    "title": 'PhaserTestGame',
	    "width": 1200,
	    "height": 500,
	    "type": Phaser.AUTO,
	    "backgroundColor": '#000',
        "parent": 'game-container',
        "scene" : [GameScreen],
	    "scale": {
	        "mode": Phaser.Scale.FIT,
	        "autoCenter": Phaser.Scale.CENTER_HORIZONTALLY
	    }
    } );
    
	game.scene.add( 'Boot', Boot, true );
} );

class Boot extends Phaser.Scene {

	preload() {
        
	}

	create() {
		this.scene.start( 'GameScreen' );
	}

}
