var GameState = {
    preload: function(){
        this.game.load.image('background', 'assets/images/background.png');
        this.game.load.image('arrow', 'assets/images/arrow.png')
        this.game.load.image('chicken', 'assets/images/chicken.png');
        this.game.load.image('horse', 'assets/images/horse.png');
        this.game.load.image('pig', 'assets/images/pig.png');
        this.game.load.image('sheep', 'assets/images/sheep3.png');
        
    },
    create: function(){

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //have the game centered horizontally
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        //screen size will be set automaticaly
        this.scale.setScreenSize(true);

        //create a sprite for a background
        this.background = this.game.add.sprite(0,0,'background');
        
        this.pig = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY, 'pig');
        this.pig.anchor.setTo(0.5);

        //left arrow
        this.leftArrow = this.game.add.sprite(60, this.game.world.centerY, 'arrow' )
        this.leftArrow.anchor.setTo(0.5);
        this.leftArrow.scale.x = -1;
        this.leftArrow.customParams = {direction: -1}

        //left arrow allow user input
        this.leftArrow.inputEnabled = true;

        //right arrow
        this.rightArrow = this.game.add.sprite(580, this.game.world.centerY, 'arrow' )
        this.rightArrow.anchor.setTo(0.5);
        this.rightArrow.customParams = {direction: 1}

        //right arrow allow user input

    },
    update: function(){
        
    },
};

var game = new Phaser.Game(640,360, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');

