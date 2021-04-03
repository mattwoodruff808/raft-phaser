import Phaser from 'phaser';
import { Game } from './sceneKeys';

class TitleScreen extends Phaser.Scene {

    create(){
        this.add.text(325, 350, 'Click to Start!');

        this.input.once('pointerdown', () => {
            this.scene.stop(TitleScreen);
            this.scene.start(Game);
        })
    }
}

export default TitleScreen;