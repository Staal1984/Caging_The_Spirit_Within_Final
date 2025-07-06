const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#1a1a1a",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);

let player;
let ball;

function preload() {
  this.load.image("player", "https://upload.wikimedia.org/wikipedia/commons/3/3c/Transparent_square.svg");
  this.load.image("ball", "https://upload.wikimedia.org/wikipedia/commons/3/3c/Transparent_square.svg");
}