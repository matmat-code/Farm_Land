varGameState = {
    preload: function(){
        this.load.image('background', 'assets/images/background.png');
        this.load.image('chicken', 'assets/images/chicken.png');
        this.load.image('horse', 'assets/images/horse.png');
        this.load.image('pig', 'assets/images/pig.png');
        this.load.image('sheep', 'assets/images/sheep3.png');
        
    },
    create: function(){
        this.background = this.game.add.sprite(0,0,'background');
        this.chicken = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY, 'chicken');
        this.chicken.anchor.setTo(0.5);

        this.horse = this.game.add.sprite(120,10, 'horse');

        this.pig = this.game.add.sprite(500,300, 'pig');
        this.pig.anchor.setTo(0.5);
    },
    update: function(){



    },
};

var game = new Phaser.game(640,360, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');

// 0:54