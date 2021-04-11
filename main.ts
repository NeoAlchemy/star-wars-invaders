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
    for (let value of tiles.getTilesByType(assets.tile`millenium falcon`)) {
        tiles.placeOnTile(falcon, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
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
function buildLevel () {
    scene.setBackgroundColor(15)
    tiles.setTilemap(tilemap`level1`)
}
sprites.onCreated(SpriteKind.Projectile, function (sprite) {
    projectileExists = 1
})
// https://www.deviantart.com/mattcantdraw/art/Star-Wars-Space-Invaders-286179610
let projectileExists = 0
let projectile: Sprite = null
let firedProjectile = 0
let falcon: Sprite = null
setupGame()
buildLevel()
initializePlayer()
game.onUpdate(function () {
    if (projectileExists == 1) {
        console.logValue("x", projectile.y)
        if (projectile.y == 3) {
            firedProjectile = 0
        }
    }
})
