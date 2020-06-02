Preload = function (game) {};

Preload.prototype = {
  preload: function () {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // trata de centrar horizontalmente
    this.scale.pageAlignHorizontally = true;
    // trata de centrar verticalmente
    this.scale.pageAlignVertically = true;

    this.game.load.image("button","assets/images/btn.png");
    // this.game.load.image("goal","assets/images/goal.png");

    this.game.load.video("run","assets/videos/run_meme.mp4")
    this.game.load.video("jc","assets/videos/johncena_meme.mp4")
  },
  create: function () {
    this.state.start("Menu");
  },
};
