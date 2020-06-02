Menu = function (game) {};
Menu.prototype = {
    create:function(){
		this.buttonLeft = this.game.add.sprite(400,300,'button');
		this.buttonRight = this.game.add.sprite(800,300,'button');
		this.buttonLeft.anchor.setTo(0.5);
		this.buttonRight.anchor.setTo(0.5);
		this.buttonLeft.scale.setTo(-1,1);
		this.buttonLeft.inputEnabled = true;
		this.buttonRight.inputEnabled = true;
		this.buttonLeft.events.onInputDown.add(this.goLeft,this);
		this.buttonRight.events.onInputDown.add(this.goRight,this);
		
	},
	goLeft:function(){
		localStorage.points = 1;
		this.state.start("Game");
	},
	goRight:function(){
		localStorage.points = 2;
		this.state.start("Game");
	}
};