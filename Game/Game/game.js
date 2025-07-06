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
};function create() {
  // Player setup
  player = this.physics.add.image(400, 500, "player").setDisplaySize(50, 50).setTint(0xff4444);
  player.setCollideWorldBounds(true);

  // Ball setup
  ball = this.physics.add.image(400, 300, "ball").setDisplaySize(30, 30).setTint(0x00ccff);
  ball.setBounce(1);
  ball.setCollideWorldBounds(true);
  ball.setVelocity(100, 120);

  // Collisions
  this.physics.add.collider(player, ball);
  
  // Controls
  cursors = this.input.keyboard.createCursorKeys();
}

const game = new Phaser.Game(config);

let player;
let ball;

function preload() {
  this.load.image("player", "https://upload.wikimedia.org/wikipedia/commons/3/3c/Transparent_square.svg");
  this.load.image("ball", "https://upload.wikimedia.org/wikipedia/commons/3/3c/Transparent_square.svg");
}function update() {
  const speed = 200;
  player.setVelocity(0);

  if (cursors.left.isDown) {
    player.setVelocityX(-speed);
  } else if (cursors.right.isDown) {
    player.setVelocityX(speed);
  }

  if (cursors.up.isDown) {
    player.setVelocityY(-speed);
  } else if (cursors.down.isDown) {
    player.setVelocityY(speed);
  }
}