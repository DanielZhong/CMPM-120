class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create(){
        this.add.text(20, 20, "Rocket Patrol play");
        
        //green ui background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0,0);
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0)
    }

}
