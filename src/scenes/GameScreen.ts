import { config } from '../game';

export default class GameScreen extends Phaser.Scene {

    constructor() {
        super( 'GameScreen' );
    }

    create = () => {
        this.add.text( 20, 20, 'Loading game...' );
        
        this.add.isobox( config.width / 2, config.height / 2, 96, 48 );
    }
}