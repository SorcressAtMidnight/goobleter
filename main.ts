scene.setBackgroundColor(6)
let dino_pet = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 8 f 8 f 8 f 
    . . . . f f f f f f f f f f f f 
    . . . . f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    f . . . f f f f f f f f . . . . 
    f . . . f . . f . . f . . . . . 
    . . . . f . . f . . f . . . . . 
    . . . . f . . f . . f . . . . . 
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


let chris_thing = sprites.create(assets.image`myImage`);
chris_thing.setPosition(80, 64)
