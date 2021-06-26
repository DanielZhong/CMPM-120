class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }


    preload(){
        this.load.image('rocket', '.assets/rocket.png');
        this.load.image('spaceship', '.assets/spaceship.png');
        this.load.image('starfield', '.assets/starfield.png');
    }

    create(){
        this.add.text(20, 20, "Rocket Patrol play");

        
    }

}
