namespace SpriteKind {
    export const Block = SpriteKind.create()
}
// https://www.deviantart.com/mattcantdraw/art/Star-Wars-Space-Invaders-286179610
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
    for (let height2 = 0; height2 <= 14; height2++) {
        for (let width = 0; width <= 20; width++) {
            if (height2 == 0 && width == 0) {
            	
            } else if (height2 == 0 && width == 1) {
            	
            } else if (height2 == 0 && width == 2) {
            	
            } else if (height2 == 1 && width == 0) {
            	
            } else if (height2 == 1 && width == 1) {
            	
            } else if (height2 == 2 && width == 0) {
            	
            } else if (height2 == 0 && width == 20) {
            	
            } else if (height2 == 0 && width == 19) {
            	
            } else if (height2 == 0 && width == 18) {
            	
            } else if (height2 == 1 && width == 20) {
            	
            } else if (height2 == 1 && width == 19) {
            	
            } else if (height2 == 2 && width == 20) {
            	
            } else if (height2 == 14 && width == 5) {
            	
            } else if (height2 == 14 && width == 6) {
            	
            } else if (height2 == 14 && width == 7) {
            	
            } else if (height2 == 14 && width == 8) {
            	
            } else if (height2 == 14 && width == 9) {
            	
            } else if (height2 == 14 && width == 10) {
            	
            } else if (height2 == 14 && width == 11) {
            	
            } else if (height2 == 14 && width == 12) {
            	
            } else if (height2 == 14 && width == 13) {
            	
            } else if (height2 == 14 && width == 14) {
            	
            } else if (height2 == 13 && width == 6) {
            	
            } else if (height2 == 13 && width == 7) {
            	
            } else if (height2 == 13 && width == 8) {
            	
            } else if (height2 == 13 && width == 9) {
            	
            } else if (height2 == 13 && width == 10) {
            	
            } else if (height2 == 13 && width == 11) {
            	
            } else if (height2 == 13 && width == 12) {
            	
            } else if (height2 == 13 && width == 13) {
            	
            } else if (height2 == 12 && width == 7) {
            	
            } else if (height2 == 12 && width == 8) {
            	
            } else if (height2 == 12 && width == 9) {
            	
            } else if (height2 == 12 && width == 10) {
            	
            } else if (height2 == 12 && width == 11) {
            	
            } else if (height2 == 12 && width == 12) {
            	
            } else if (height2 == 11 && width == 8) {
            	
            } else if (height2 == 11 && width == 9) {
            	
            } else if (height2 == 11 && width == 10) {
            	
            } else if (height2 == 11 && width == 11) {
            	
            } else {
                mySprite = sprites.create(img`
                    7 7 
                    7 7 
                    `, SpriteKind.Block)
                mySprite.setPosition(width + x, height2 + y)
            }
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
