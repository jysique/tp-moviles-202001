Game = function (game) {};
Game.prototype = {
    create:function(){
        this.index = localStorage.points;
        this.video = null;
        if (this.index == 1) {
            this.video = this.game.add.video('run');

        }else{
            this.video = this.game.add.video('jc');
        }
        this.timeElapsed = 0;
        this.timeLimit = 300;
        this.timecooldown = 0;
        this.timecooldownBool = false;

        this.duration = this.video.duration*1000;
        // this.video.onPlay.addOnce(this.goVideoTime, this);
        

        this.video.addToWorld(this.game.width / 2, this.game.height/2, 0.5, 0.5,2,2);
        this.video.play();
        this.video.volume = 0.2;
        
        this.spacekey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.qkey = this.game.input.keyboard.addKey(Phaser.Keyboard.Q);
        
        this.rate = 0;
        this.video.playbackRate = this.rate;
    },
    goVideoTime:function(){
        //this.duration = tiempo por defecto del video
        // this.game.time.events.add(this.duration, this.goMenu, this);    
    },
    goMenu:function(){
        this.video.playbackRate = this.rate;
        this.state.start("Menu");
        
    },
    update:function(){
        if(!this.video.playing){
            this.video.play(false);
            this.goMenu();
        }
    
        this.qkey.onDown.add(this.cooldownPlayBackRate,this);
        this.activeCooldown();

        if (this.video.playbackRate<2) {
            this.spacekey.onDown.add(this.addPlayBackRate,this);
            
        }else{
            this.spacekey.enabled=false;
        }

        this.timeElapsed+=1;
        if (this.timeElapsed >= this.timeLimit) {
            this.timeElapsed = 0;
            this.goDownPlayBackRate();
        }
        console.log(this.video.playbackRate);
    },
    addPlayBackRate:function(){
        this.video.playbackRate+=0.1;
    },
    goDownPlayBackRate:function(){
        if (this.video.playbackRate>0.1) {
            this.video.playbackRate-=0.1;
        }else{
            this.video.playbackRate = 0;
        }
    },
    cooldownPlayBackRate:function(){
        this.timecooldownBool =true;
    },
    activeCooldown:function(){
        if(this.timecooldownBool){
            this.timecooldown++;
            if (this.timecooldown>100) {
                this.addPlayBackRate();
                this.timecooldown = 0;
                this.timecooldownBool = false;
            }
            
        }else{
            this.timecooldown = 0;
        }
    },
    render:function() {

        this.game.debug.text("Video Time: " +this.video.currentTime, 32, 32);
        this.game.debug.text("Video Duration: " + this.video.duration, 32, 64);
        this.game.debug.text("Video Velocity: " + this.video.playbackRate, 32, 96);

        this.game.debug.text("Video width: " + this.video.video.videoWidth, 600, 32);
        this.game.debug.text("Video height: " + this.video.video.videoHeight, 600, 64);
    
        this.game.debug.text("Q para tiempo cooldown" , 900, 32);
        this.game.debug.text("SPACE para subir velocidad reproduccion", 900, 64);
        
        
    
    }

};