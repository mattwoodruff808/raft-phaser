import Phaser from 'phaser';
import * as SceneKeys from './scenes/sceneKeys';
import TitleScreen from './scenes/titleScreen';
import Game from './scenes/game';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 800,
    backgroundColor: '#7097b8',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            // debug: true
        }
    }
};

const game = new Phaser.Game(config);

game.scene.add(SceneKeys.TitleScreen, TitleScreen);
game.scene.add(SceneKeys.Game, Game);

game.scene.start(SceneKeys.TitleScreen);