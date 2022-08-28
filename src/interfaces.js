"use strict";
const tlou = {
    id: 123,
    title: "The Last of Us",
    description: "The best game in the world",
    genre: "Action",
    platform: ["PS3", "PS4"],
    getSimilars: (title) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    },
};
console.log(tlou.genre);
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
const leftbehind = {
    title: "The Last of Us - Left Behind",
    description: "You play as Ellie before the original game",
    genre: "Action",
    platform: ["PS4"],
    originalGame: tlou,
    newContent: ["3 hours story", "new characters"],
};
class CreateGame {
    constructor(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}
