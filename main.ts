scene.setBackgroundColor(6)
let dino_pet = sprites.create(img`
    . . . . f f f f f . . . . . . .
    . . . f e e e e e f . . . . . .
    . . f d d d d e e e f . . . . .
    . c d d d d d d e e f f . . . .
    . c d f d d f d e e d d f . . .
    c d e e d d d d e e b d c . . .
    c d d d d c d d e e b d c . . .
    c c c c c d d e e e f c . . . .
    . f d d d d e e e f f . . . . .
    . . f f f f f e e e e f . . . .
    . . . . f f e e e e e e f . f f
    . . . f e e f e e f e e f . e f
    . . f e e f e e f e e e f . e f
    . f b d f d b f b b f e f f e f
    . f d d f d d f d d b e f f f f
    . . f f f f f f f f f f f f f .
`, SpriteKind.Enemy)
let dino_food = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f . . f . . . . . . 
    . . . . . 1 1 1 . . . . . . . . 
    . . . . . 5 1 5 . . . . . . . . 
    . . . . . 1 1 1 . . . . . . . . 
    . . . . 1 e e e 1 . . . . . . . 
    . . . . 1 e e e 1 . . . . . . . 
    . . . . 1 f f f 1 . . . . . . . 
    . . . . . 1 1 1 . . . . . . . . 
    . . . . . f . f . . . . . . . . 
    . . . . . f . f . . . . . . . . 
    . . . . . f . f . . . . . . . . 
    `, SpriteKind.Player)
dino_food.setPosition(117, 55)
dino_pet.setPosition(28, 21)

controller.moveSprite(dino_food)

// start:Chris Area 1

let worm = sprites.create(assets.image`myImage`, SpriteKind.Enemy);
worm.setPosition(80, 64)

game.onUpdateInterval(5, () => {
    worm.vx = Math.random() * 20 - 10;
    worm.vy = Math.random() * 20 - 10;
});

sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, (a, b) => {
    b.sayText("ouch!", 500);
});

// end:Chris Area 1
