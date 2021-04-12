namespace SpriteKind {
    export const Block = SpriteKind.create()
}
function initializePlayer () {
    falcon = sprites.create(img`
        . . . . . 7 . . 7 . . . . . 
        . . . . . 7 . . 7 . . . . . 
        . . . . 7 7 . . 7 7 . . . . 
        . . . . 7 7 . . 7 7 . . . . 
        . . . . 7 7 . . 7 7 . . . . 
        . . . . 7 7 . . 7 7 . . . . 
        . . . 7 7 7 7 7 7 7 7 . . . 
        . . . 7 7 7 7 7 7 7 7 . . . 
        . . 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 . . . 
        `, SpriteKind.Player)
    for (let height of tiles.getTilesByType(assets.tile`millenium falcon`)) {
        tiles.placeOnTile(falcon, height)
        tiles.setTileAt(height, assets.tile`transparency16`)
    }
    controller.moveSprite(falcon, 100, 0)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (firedProjectile == 0) {
        firedProjectile = 1
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . 7 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, falcon, 0, -150)
    }
})
function setupGame () {
    scene.centerCameraAt(0, 0)
}
function blocker (x: number, y: number) {
    for (let height = 0; height <= 20; height++) {
        for (let width = 0; width <= 20; width++) {
            mySprite = sprites.create(img`
                7 7 
                7 7 
                `, SpriteKind.Block)
            mySprite.setPosition(width + x, height + y)
        }
    }
}
function buildLevel () {
    scene.setBackgroundColor(15)
    tiles.setTilemap(tilemap`level1`)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Block, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
})
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    projectileExists = 1
})
function initializeBlocker () {
    blocker(20, 60)
    blocker(70, 60)
    blocker(120, 60)
}
// https://www.deviantart.com/mattcantdraw/art/Star-Wars-Space-Invaders-286179610
let projectileExists = 0
let mySprite: Sprite = null
let projectile: Sprite = null
let firedProjectile = 0
let falcon: Sprite = null
setupGame()
buildLevel()
initializePlayer()
initializeBlocker()
game.onUpdate(function () {
    if (projectileExists == 1) {
        if (projectile.y == 3) {
            firedProjectile = 0
        }
    }
})
