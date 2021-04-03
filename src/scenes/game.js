import Phaser from 'phaser';
import raft from '../assets/raft.png';
import log from '../assets/log.png';

const gameState = {};

class Game extends Phaser.Scene {
    preload(){
        this.load.image('raft', raft);

        this.load.image('log', log);
    }

    create(){
        gameState.raft = this.physics.add.sprite(400, 700, 'raft').setScale(.5);
        gameState.raft.setCollideWorldBounds(true);

        gameState.cursors = this.input.keyboard.createCursorKeys();

        const logs = this.physics.add.group();

        const logGen = () => {
            const xCoord = Math.random() * 800;
            logs.create(xCoord, 10, 'log').setScale(.75);
            logs.setVelocityY(300);
        };

        const logGenLoop = this.time.addEvent({
            delay: 150,
            callback: logGen,
            callbackScope: this,
            loop: true
        });

        // this.physics.add.collider(logs, logDestroyer, function(log){
        //     log.destroy();
        // });
    }

    update(){
        if (gameState.cursors.left.isDown){
            gameState.raft.setVelocityX(-200);
        } else if (gameState.cursors.right.isDown){
            gameState.raft.setVelocityX(200);
        } else {
            gameState.raft.setVelocityX(0);
        }
    }

}

export default Game;