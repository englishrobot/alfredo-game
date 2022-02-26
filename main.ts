namespace SpriteKind {
    export const camara = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.runtime() - recarga > 500) {
        bomb = sprites.createProjectileFromSprite(img`
            . . e e e . . . 
            . . . e . . . . 
            . . 9 9 9 . . . 
            . 9 9 7 9 9 . . 
            . 9 7 7 7 9 . . 
            . 9 7 7 7 9 . . 
            . 9 7 7 7 9 . . 
            . 9 9 9 9 9 . . 
            `, hero, 70, 0)
        recarga = game.runtime()
    }
})
function crearBug () {
    scene.setTile(15, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    for (let value of scene.getTilesByType(15)) {
        bug = sprites.create(img`
            . . . . . . . 
            . . . . . . . 
            . . . . . . . 
            . . e e e . . 
            . e d e d e . 
            e e e e e e e 
            . . f f f . . 
            . f f . f f . 
            `, SpriteKind.Enemy)
        list.push(bug)
        scene.place(value, bug)
        animation.runImageAnimation(
        bug,
        [img`
            . . . . . . . 
            . . . . . . . 
            . . . . . . . 
            . . 8 8 8 . . 
            . 8 8 8 8 8 . 
            8 8 8 8 8 8 8 
            . . f f f . . 
            . f f . f f . 
            `,img`
            . . . . . . . 
            . . . . . . . 
            . . . . . . . 
            . . 8 8 8 . . 
            . 8 d 8 d 8 . 
            8 8 8 8 8 8 8 
            . . f f f . . 
            . . f f f . . 
            `],
        500,
        true
        )
    }
}
function cryioeitbad () {
    scene.setTile(8, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    tiles.destroySpritesOfKind(SpriteKind.Enemy)
    for (let value of scene.getTilesByType(8)) {
        bad = sprites.create(img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `, SpriteKind.Enemy)
        scene.place(value, bad)
        animation.runImageAnimation(
        bad,
        [img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f 2 f 2 f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `,img`
            . f f f f f . . 
            . f f f f f . . 
            . f f f f f . . 
            . . f f f . . . 
            8 8 f 8 f 8 8 . 
            8 . 8 8 8 . 8 . 
            8 . 8 8 8 . 8 . 
            f . . 8 . . f . 
            `],
        200,
        true
        )
        animation.runMovementAnimation(
        bad,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        hero.vy += -150
    }
})
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    monedero = info.score()
    cambiarLevel(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(2)
    music.baDing.playUntilDone()
})
function Aaaaaaaaaaaaaaaaaaahhhhhhhhhhhhhhhhhjjj () {
    scene.setTile(4, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    for (let value of scene.getTilesByType(4)) {
        mocoooooooooooooooo = sprites.create(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `, SpriteKind.Enemy)
        scene.place(value, mocoooooooooooooooo)
        animation.runImageAnimation(
        mocoooooooooooooooo,
        [img`
            . . . . . . . . 
            . . 7 7 7 . . . 
            . . 7 7 7 7 . . 
            . . 7 7 2 7 1 . 
            . 7 2 7 7 7 1 1 
            7 7 7 7 7 1 7 1 
            5 7 7 7 7 7 7 1 
            2 7 7 2 7 7 7 1 
            `,img`
            . . . 7 7 . . . 
            . . 7 7 7 . . . 
            . 7 7 7 7 7 7 . 
            7 5 7 7 2 7 1 . 
            7 7 2 7 7 7 1 1 
            7 7 7 7 7 1 7 1 
            5 7 7 7 7 7 7 1 
            2 7 7 2 7 7 7 1 
            `,img`
            . . 7 2 7 . . . 
            . 5 7 7 7 7 . . 
            . 7 7 7 7 7 7 . 
            . 7 7 7 7 1 7 7 
            5 7 2 7 7 5 1 7 
            7 7 7 7 7 7 1 7 
            2 7 7 7 2 7 1 7 
            7 7 7 7 7 7 1 7 
            `,img`
            . . 7 2 7 . . . 
            . 5 7 7 7 7 . . 
            . 7 7 7 2 7 7 . 
            . 7 7 7 7 1 7 . 
            5 7 2 7 7 5 1 . 
            7 7 7 7 7 7 1 . 
            7 7 7 7 2 7 1 . 
            2 7 7 7 7 7 1 . 
            `,img`
            . . 7 2 7 . . . 
            . 5 7 7 7 7 . . 
            . 7 7 7 7 7 7 . 
            . 7 7 7 7 1 7 7 
            5 7 2 7 7 5 1 7 
            7 7 7 7 7 7 1 7 
            2 7 7 7 2 7 1 7 
            7 7 7 7 7 7 1 7 
            `],
        400,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.disintegrate, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.y) {
        sprite.vy = -300
        otherSprite.destroy(effects.fire, 500)
        music.beamUp.play()
    } else {
        cambiarLevel(false)
        info.setScore(monedero)
    }
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    cambiarLevel(false)
    info.setScore(monedero)
})
function cambiarLevel (paso: boolean) {
    if (paso) {
        currentLevel += 1
    }
    if (currentLevel == 1) {
        scene.setTileMap(img`
            ............eeeeeeeeeeeee........e..........................
            ..............eeeeeeeeee...77....e.........................a
            ...............eeeeeeee...7.e....e.......................777
            ................eeeeee...7..e...5e.......................eee
            .................eee....7...e....e....................77..ee
            ..................ee.777....e...5e...................77e...e
            ..................ee........e....e..........5...5...77ee....
            ...................e77777775e...5e.........7777777777ee.....
            ...................e........e....e.......777eeeeeeeeee......
            ...................e57777777e...5e......77eee...............
            ...................e........e....e.5..777ee.................
            ...................e77777775e...5e77..eeee..................
            3..5..8.5..8.5..............e...............................
            77777...77...77...7777777777e7777777772222222222222222222222
            eeeee222ee222ee222eeeeeeeeeeeeeeeeeeee2222222222222222222222
            `, TileScale.Eight)
    } else if (currentLevel == 2) {
        scene.setTileMap(img`
            ................................e...........................
            3...............................e.........................a.
            7777............................e........................777
            eee77...........................e....................777.eee
            eeee7.5.........................e...e................eee..ee
            eeee7...........................e..ee..............777.....e
            eeee7.5.........................e...e..............eee......
            eeee7...........................ee..e............777........
            eeee7.5.........................e...e............eee........
            eeee7...........................e..ee..........777..........
            eeee7.5.........................e...e..........eee..........
            eeee7.....................8.....ee..e........777............
            eeee7.....5...5...5...5.5...5.5.....e...8....eee............
            eeee7777..77..77..77..77777777777777e..77777777.............
            eeeeeeee22ee22ee22ee22eeeeeeeeeeeeeee22eeeeeeee.............
            `, TileScale.Eight)
    } else if (currentLevel == 3) {
        scene.setTileMap(img`
            3...............................................................................
            ................................................................................
            5...............................................................................
            ................................................................................
            5...............................................................................
            ................................................................................
            5...............................................................................
            ................................................................................
            5...............................................................................
            ................................................................................
            5...............................................................................
            ................................................................................
            5...............................................................................
            ................................................................................
            5...............................................................................
            ................................................................................
            5...............................................................................
            ................................................................................
            5...............................................................................
            ................................................................................
            5...............................................................................
            ....................ee....7.....................................................
            5................7...e....e.....................................................
            .................ee..e.5..e.....................................................
            5................e...e....e.....................................................
            .................e..ee.5..e.....................................................
            5................e...e....e.....................................................
            .................ee..e.5..e.....................................................
            5................e...e....e.....................................................
            .................e..ee.5..e.....................................................
            5................e...e....e.....................................................
            .................ee..e.5..e.....................................................
            5................e...e...ee.....................................................
            .................e..ee.5.e......................................................
            5................e...e...e......................................................
            .................ee..e...e......................................................
            5....................e...e......................................................
            ...................eee...e......................................................
            5.................ee.....e......................................................
            ................eee......e......................................................
            5..............ee........e.....................................................a
            .............eee.........e..............................................8...7777
            5...........ee...........e.............................................777777eee
            ..........eee............e...........................................777eeeeee22
            5........ee..............e................................5..5..5...77eee2222222
            ........ee...............e...............................777777777777ee222222222
            5....eeee................ee.............................77eeeeeeeeeee22222222222
            ee..ee2222222222222277.5.........5....5.8.5.....5....7777ee222222222222222222222
            eeeee222222222222222e77777777722777227777777722777227eeeee2222222222222222222222
            eee22222222222222222eeeeeeeeee22eee22eeeeeeee22eee22ee22222222222222222222222222
            `, TileScale.Eight)
    } else if (currentLevel == 4) {
        scene.setTileMap(img`
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            3...............................................................................
            7777............................................................................
            eeee............................................................................
            eee.............................................................................
            ee................................................................a.............
            e.....................................................dddddd5..ddddd.....dddddd.
            ......................................................ddddddd..ddddd.....dddddd.
            ......................................................dddddd..5dddddddddddddddd.
            ......................................................dddddd..ddddddddddddddddd.
            ......................................................dddddd5..dddddddddddddddd.
            ........................................................ddddd..dddddddddddddd...
            ........................................................dddd..5dddddddddddddd...
            ........................................................dddd..ddd........dddd...
            ........................................................dddd......4......dddd...
            ........................................................ddddddddddddddd5.dddd...
            ........................................................dddd..........dd.dddd...
            ........................................................dddd......4......dddd...
            ........................................................dddd..5dddddddddddddd...
            ...............5.5.5.5..................................dddd..dd.........dddd...
            ................77777...................................dddd......4......dddd...
            8.8.8.8.8......5777775..................................ddddddddddddddd5.dddd...
            ..............777777777.................................dddd..........dd.dddd...
            .8.8.8.8......777777e77.................................dddd......4......dddd...
            ..............777777777.................................dddd..5dddddddddddddd...
            ..............7e7777777.................................dddd..dd.........dddd...
            ..............7777777e7.................................dddd......4......dddd...
            ..............777777777.................................ddddddddddddddd5.dddd...
            ..............777eeee77.................................dddd..........dd.dddd...
            ...............77eeee7..................................dddd......4......dddd...
            .................eeee...................................dddd..5dddddddddddddd...
            .................eee....................................dddd..dd.........dddd...
            .................eee......8.............................dddd......4......dddd...
            ................7eee7777777.............................dddddddddddddd5..dddd...
            ................77777777777.............................dddd.........dd..dddd...
            ................eeeee77777e.............................dddd......4......dddd...
            222.............eeeeeee77ee.............................dddd..ddddddddddddddd...
            2222............eeeeeee77ee.............................dddd5............dddd...
            222222..........eeeeeee77ee..............................ddddd...........dddd...
            222222.................77................................................dddd...
            2222222................77....5.5.5..................7777777777777777777777777777
            222222222222.....2222..77.5.7777777.5..4..5..4..5..777eeeeeeeeeeee77777eeeeeeeee
            22222222222222222222222e77777eeeee777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeee
            22222222222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            22222222222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            22222222222222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            `, TileScale.Eight)
    } else if (currentLevel == 5) {
        scene.setTileMap(img`
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            ....a
            8....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            8....
            .....
            .....
            .....
            .....
            .....
            .....
            .....
            3.4..
            eeee2
            `, TileScale.Eight)
    } else {
        game.over(true)
    }
    scene.setTile(14, img`
        f e e b e e e f 
        f b e e e e e f 
        f e e e e b e f 
        f e e e e e e f 
        f e e e e e e f 
        f e b e e e e f 
        f e e e e e e f 
        f e e e b e e f 
        `, true)
    scene.setTile(7, img`
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 
        e 7 e 7 e 7 e 7 
        e e e e e e e e 
        `, true)
    scene.setTile(2, img`
        4 4 f 4 4 2 2 2 
        2 5 4 4 4 4 2 2 
        2 4 4 2 f 2 f 5 
        4 4 f 2 2 2 4 2 
        4 2 2 2 2 5 4 5 
        2 2 2 5 2 2 4 2 
        4 2 2 5 5 5 2 2 
        2 2 2 2 5 2 2 2 
        `, true)
    scene.setTile(3, img`
        f f f f f f f . 
        f e e e e e f . 
        f e e e e e f . 
        f e e e e 5 f . 
        f e e e e e f . 
        f e e e e e f . 
        f e e e e e f . 
        f f f f f f f . 
        `, false)
    scene.setTile(10, img`
        . f f f f f f f 
        . f e e e e e f 
        . f e e e e e f 
        . f 5 e e e e f 
        . f e e e e e f 
        . f e e e e e f 
        . f e e e e e f 
        . f f f f f f f 
        `, true)
    scene.setTile(13, img`
        d 2 2 d 2 2 d 2 
        d d d d d d d d 
        2 d 2 2 d 2 2 d 
        d d d d d d d d 
        d 2 d 2 2 d 2 2 
        d d d d d d d d 
        2 2 d 2 2 d 2 d 
        d d d d d d d d 
        `, true)
    scene.setTile(5, img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, false)
    scene.placeOnRandomTile(hero, 3)
    scene.placeOnRandomTile(ghost, 3)
    tiles.destroySpritesOfKind(SpriteKind.Food)
    for (let value of scene.getTilesByType(5)) {
        coin = sprites.create(img`
            . . . f f . . . 
            . . f 5 5 f . . 
            . f 5 5 5 5 f . 
            . f 5 f f 5 f . 
            . f 5 4 f 5 f . 
            . f 5 5 5 5 f . 
            . . f 5 5 f . . 
            . . . f f . . . 
            `, SpriteKind.Food)
        scene.place(value, coin)
        animation.runImageAnimation(
        coin,
        [img`
            . . f f f f . . 
            . f 5 5 5 5 f . 
            f 5 4 5 5 5 5 f 
            f 5 4 5 5 5 5 f 
            f 5 4 5 5 5 5 f 
            f 5 4 5 5 5 5 f 
            . f 4 4 5 5 f . 
            . . f f f f . . 
            `,img`
            . . . f f . . . 
            . . f 5 5 f . . 
            . f 4 5 5 5 f . 
            . f 4 5 5 5 f . 
            . f 4 5 5 5 f . 
            . f 4 5 5 5 f . 
            . . f 4 5 f . . 
            . . . f f . . . 
            `,img`
            . . . . . . . . 
            . . . f f . . . 
            . . f 4 5 f . . 
            . . f 4 5 f . . 
            . . f 4 5 f . . 
            . . f 4 5 f . . 
            . . . f f . . . 
            . . . . . . . . 
            `,img`
            . . . f . . . . 
            . . . f . . . . 
            . . . f . . . . 
            . . . f . . . . 
            . . . f . . . . 
            . . . f . . . . 
            . . . f . . . . 
            . . . f . . . . 
            `,img`
            . . . . . . . . 
            . . . f f . . . 
            . . f 4 5 f . . 
            . . f 4 5 f . . 
            . . f 4 5 f . . 
            . . f 4 5 f . . 
            . . . f f . . . 
            . . . . . . . . 
            `,img`
            . . . f f . . . 
            . . f 5 5 f . . 
            . f 4 5 5 5 f . 
            . f 4 5 5 5 f . 
            . f 4 5 5 5 f . 
            . f 4 5 5 5 f . 
            . . f 4 5 f . . 
            . . . f f . . . 
            `,img`
            . . f f f f . . 
            . f 5 5 5 5 f . 
            f 5 4 5 5 5 5 f 
            f 5 4 5 5 5 5 f 
            f 5 4 5 5 5 5 f 
            f 5 4 5 5 5 5 f 
            . f 4 4 5 5 f . 
            . . f f f f . . 
            `],
        200,
        true
        )
    }
    cryioeitbad()
    crearBug()
    Aaaaaaaaaaaaaaaaaaahhhhhhhhhhhhhhhhhjjj()
}
let coin: Sprite = null
let mocoooooooooooooooo: Sprite = null
let bad: Sprite = null
let list: Sprite[] = []
let bug: Sprite = null
let bomb: Sprite = null
let recarga = 0
let currentLevel = 0
let monedero = 0
let ghost: Sprite = null
let hero: Sprite = null
scene.setBackgroundImage(img`
    2222244444444444444422222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2222444444444444444442222222222222222222222222222222222222222222122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2224444444555555544444222222222222222222222222222222222222222211111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2244444455555555555444422222222222222222222222222222222222221111111222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2244444555555555555544422222222222222222222222222222222222111111111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    24444445555555555555444422222222222222222222dddddddddd2221111111111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    2444445555555555555554442222222222222222222ddddddddddddd11111111111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    24444455555555555555544422222222222222222dddddddddddddddd1111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    244444555555555555555444222222222222222dddddddddddddddddd1111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
    24444455555555555555544422222222222222ddddddddddddddddddd11111111111112222222222222222222222222222222222222222dddddddddd2222222222222222222222222222222222222222
    2444445555555555555554442222222222222dddddddddddddddddddd11111111111111222222222222222222222222222222222222ddddddddddddddd22222222222222222222222222222222222222
    2444445555555555555554442222222222222dddddddddddddddddddd111111111111111222222222222222222222222222222222ddddddddddddddddddddd2222222222222222222222222222222222
    24444455555555555555544422222222222dddddddddddddddddddddd1111111111111111222222222222dddddd222222222222dddddddddddddddddddddddddd2222222222222222222222222222222
    244444455555555555554444222222222dddddddddddddddddddddddd11111111111111111222222222dddddddddddddddddddddddddddddddddddddddddddddddd22222222222222222222222222222
    2244444555555555555544422222222ddddddddddddddddddddddddddd111111111111111111222222dddddddddddddddddddddddddddddddddddddddddddddddddd2222222222222222222222222222
    2244444455555dddd554444222222ddddddddddddddddddddddddddddd111111111111111111222222ddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222222
    22244444445ddddddddd4422222ddddddddddddddddddddddddddddddd11111111111111111112dddddddddddddddddddddddddddddddddddddddddddddddddddddddd22222222222222222222222222
    22224444444ddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222222d
    ddd2244444dddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222222222222222222222dd
    ddddd2444ddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222222ddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222222222222222222ddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222222dddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222222222ddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2222222222222ddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22222222222ddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd222222222bddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22222222bbbdddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd22222bbbbbbdddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd2bbbbbbbbdddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbb
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbb
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbb
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbb
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbb
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbb
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbb
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbb
    ddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbb
    dddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbb
    ddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbb
    dddddddddd222222222221111dddddddddddddddddddddd111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbb
    dddddd2222222222222211111111ddddddddddddddd111111111111111111111111111111111111111111111111111122222222222222222222222222222222222222222bbbbbbbbbbbbbbbbbbbbbbbb
    22222222222222222221111111111111111111111111111111111111111111111111111111111111111111111111111222222222222222222222222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbb
    22222222222222222211111111111111111111111111111111111111111111111111111111111111111111111111111222222222222222222222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    2222222222222222211111111111111111111111111111111111111111111111111111111111111111111111111111112222222222222222222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    222222222222222e11111111111111111111111111111111111111111111111111111111111111111111111111111111222222222222222222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    22222222222222ee1111111111111111111111111111111111111111111111111111111111111111111111111111111112222222222222222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    2222222222222eee111111111111111111111111111111111111111111111111111111111111111111111111111111111122222222222222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    222222222222eeeee1111111111111111111111111111111111111111111111111111111111111111111111111111111112222222222222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    22222222222eeeeeee111111111111111111111111111111111111111111111111111111111111111111111111111111111222222222222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    22222222eeeeeeeeeee1111111111111111111111111111111111111111111111111111111111111111111111111111111112222222222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    2222222eeeeeeeeeeeee1111111111111111111111111111111111111111111111111111111111111111111111111111111112222222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    222222eeeeeeeeeeeeeee11111111111111111111111111111111111111111111111111111111111111111111111111111111122222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    2222eeeeeeeeeeeeeeeeee111111111111111111111111111111111111111111111111111111111111111111111111111111111222222222222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    222eeeeeeeeeeeeeeeeeeee11111111111111111111111111111111111111111111111111111111111111111111111111111111122222222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    22eeeeeeeeeeeeeeeeeeeeee111111111111111111111111111111111111111111111111111111111111111111111111111111111222222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    2eeeeeeeeeeeeeeeeeeeeeeee1111111111111111111111111111111111111111111111111111111111111111111111111111111112222222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    2eeeeeeeeeeeeeeeeeeeeeeee1111111111111111111111111111111111111111111111111111111111111111111111111111111ee22222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeee111111111111111111111111111111111111111111111111111111111111111111111111111111eee2bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeee11111111111111111111111111111111111111111111111111111111111111111111111111111eeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeee1111111111111111111111111111111111111111111111111111111111111111111111111111eeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeee111111111111111111111111111111111111111111111111111111111111111111111111111eeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111111111111111111111111111111111111111111111111111111111111111111111111eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee111111111111111111111111111111111111111111111111111111111111111111111111eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111111111111111111111111111111111111111111111111111111111111111111111eeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111111111111111111111111111111111111111111111111111111111111111111111eeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1111111111111111111111111111111111111111111111111111111111111111111111eeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111111111111111111111111111111111111111111111111111111111111111111eeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1111111111111111111111111111111111111111111111111111111111111111111eeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee111111111111111111111111111111111111111111111111111111111111111111eeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee111111111111111111111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111111111111111111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111111111111111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1111111111111111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee111111111111111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee111111111111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1111111111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee111111111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111111111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1111111111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111111111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee11111111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee111111111111111eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeb
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
hero = sprites.create(img`
    . . 7 7 7 . . . 
    . . f 1 f . . . 
    . . e e e . . . 
    . 7 8 7 8 7 . . 
    . 1 5 8 5 1 . . 
    . 1 8 8 8 1 . . 
    . . 8 . 8 . . . 
    . . e . e . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
controller.moveSprite(hero, 76, 0)
hero.setStayInScreen(true)
hero.ay = 500
ghost = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.camara)
ghost.vx = 5
monedero = 0
currentLevel = 0
cambiarLevel(true)
scene.cameraFollowSprite(ghost)
forever(function () {
    for (let value of list) {
        value.vx = -10
    }
    pause(1000)
    for (let value of list) {
        value.vx = 10
    }
    pause(1000)
})
forever(function () {
    ghost.y = hero.y
    if (ghost.x - hero.x > 78 && false) {
        cambiarLevel(false)
        info.setScore(monedero)
    }
})
