import GameScreen from './scenes/GameScreen';

const config = {
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
    },
}

const cartToIso = ( cartPt : Phaser.Geom.Point ) => {
    let tempPt = new Phaser.Geom.Point();
    tempPt.x = cartPt.x - cartPt.y;
    tempPt.y = ( cartPt.x + cartPt.y ) / 2;
    return tempPt;
}

const isoToCart = ( isoPt : Phaser.Geom.Point ) => {
    let tempPt = new Phaser.Geom.Point();
    tempPt.x = ( 2 * isoPt.y + isoPt.x ) / 2;
    tempPt.y = ( 2 * isoPt.y - isoPt.x ) / 2;
    return tempPt;
}

export default { config, cartToIso, isoToCart }