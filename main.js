const config = {
    type: Phaser.AUTO, // Which renderer to use
    width: 800, // Canvas width in pixels
    height: 600, // Canvas height in pixels
    parent: "game-container", // ID of the DOM element to add the canvas to
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Runs once, loads up assets like images and audio
    this.load.image("repeating-background", "https://www.mikewesthad.com/phaser-3-tilemap-blog-posts/post-1/assets/images/escheresque_dark.png");
}

function create() {
    // Runs once, after all assets in preload are loaded
    const { width, height } = this.sys.game.config;

    // Creating a repeating background sprite
    const bg = this.add.tileSprite(0, 0, width, height, "repeating-background");
    bg.setOrigin(0, 0);

    // In v3, you can chain many methods, so you can create text and configure it in one "line"
    this.add
        .text(width / 2, height / 2, "hello\nphaser 3\ntemplate", {
            font: "100px monospace",
            color: "white"
        })
        .setOrigin(0.5, 0.5)
        .setShadow(5, 5, "#5588EE", 0, true, true);
}

function update(time, delta) {
    // Runs once per frame for the duration of the scene
}