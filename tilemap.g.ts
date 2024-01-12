// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel2":
            case "nivel2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "Laberint":
            case "nivel1":return tiles.createTilemap(hex`100010000706060606060a060a06060606060605080a0a0a0a090a090a090a0a0a0a0a0a0809090909090a0909090a0909090904080a0a090a0909090a0a0a090a0a0a04080a09090a090a0909090909090909040809090a0a090a090a0a0a0a090a0a0a08090a0a0a0a0a090a09090909090a04080a0a0c0a09090909090a0a0a090a0408090a090a090a0a0a0a0a09090909040a090a090a090a09090909090a0a0a0a0a0909090a0909090a0d0a0909090a090a0a0a0a0a090a090a0a09090a090a040809090909090a090a09090a0a090904080a0a0a0a0a0a0a0a0a0a0a09090a040809090a0909090909090909090a0a04010a0202020a0a0b0b0a020a02020203`, img`
. . . . . . 2 . 2 . . . . . . . 
. 2 2 2 2 . 2 . 2 . 2 2 2 2 2 2 
. . . . . . 2 . . . 2 . . . . . 
. 2 2 . 2 . . . 2 2 2 . 2 2 2 . 
. 2 . . 2 . 2 . . . . . . . . . 
. . . 2 2 . 2 . 2 2 2 2 . 2 2 2 
. . 2 2 2 2 2 . 2 . . . . . 2 . 
. 2 2 . 2 . . . . . 2 2 2 . 2 . 
. . 2 . 2 . 2 2 2 2 2 . . . . . 
2 . 2 . 2 . 2 . . . . . 2 2 2 2 
2 . . . 2 . . . 2 . 2 . . . 2 . 
2 2 2 2 2 . 2 . 2 2 . . 2 . 2 . 
. . . . . . 2 . 2 . . 2 2 . . . 
. 2 2 2 2 2 2 2 2 2 2 2 . . 2 . 
. . . 2 . . . . . . . . . 2 2 . 
. 2 . 2 . 2 2 . . 2 . 2 . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.builtin.forestTiles0,myTiles.tile1,sprites.swamp.swampTile3,sprites.castle.rock2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Copa":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
