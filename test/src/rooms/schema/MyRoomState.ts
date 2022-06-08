import {Schema, ArraySchema, MapSchema, type} from "@colyseus/schema";

export class SnakeSection extends Schema {
    constructor(x: number=0, y: number=0) {
        super();
        this.x = x;
        this.y = y;
    }

    @type('number')
    x: number=0;

    @type('number')
    y: number=0;
}

export class Food extends Schema {
    constructor(x: number=0, y: number=0) {
        super();
        this.x = x;
        this.y = y;
    }

    @type('number')
    x: number=0;

    @type('number')
    y: number=0;
}

export class PlayerState extends Schema {
    constructor(x: number=0, y: number=0) {
        super();
        this.x = x;
        this.y = y;
    }

    @type('string')
    publicAddress: string;

    @type('string')
    sessionId: string;

    @type('number')
    x: number=0;

    @type('number')
    y: number=0;

    @type('number')
    score: number;

    @type('number')
    angle: number = 0;

    @type('number')
    snakeLength: number = 0;

    @type([SnakeSection])
    sections: ArraySchema<SnakeSection> = new ArraySchema<SnakeSection>();
}

export class MyRoomState extends Schema {
    static testX: number = 1;
    static testY: number = 1;

    @type({map: PlayerState})
    players: MapSchema<PlayerState> = new MapSchema<PlayerState>();

    @type({map: Food})
    foodItems: MapSchema<Food> = new MapSchema<Food>();
}
