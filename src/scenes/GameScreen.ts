export default class GameScreen extends Phaser.Scene {
    constructor() {
        super( 'GameScreen' );
    }

    create = () => {
        this.add.text( 20, 20, 'Loading game...' );

        let newTile = this.add.graphics();
        newTile.moveTo( 0, 0 );
    }
}