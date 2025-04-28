export abstract class SpaceShip {
        modelName: string;
        imageUrl: string;
        health = 100;
        activeShields = true;
        activeWeapons = true;

        constructor (modelName: string, imageUrl: string) {
            this.modelName = modelName;
            this.imageUrl = imageUrl;
        }
}

export class FighterShip extends SpaceShip {
    constructor() {
        super ('Viper', '/assets/viper.png');
    }
}

export class BomberShip extends SpaceShip{
    constructor () {
        super ('Raptor', '/assets/raptor.png');
    }
}   