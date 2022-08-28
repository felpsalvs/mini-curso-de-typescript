"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} has the id ${this.age}`);
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    get getLevel() {
        console.log("------GET------");
        return this.level;
    }
    set setLevel(level) {
        this.level = level;
    }
}
// logCharDetails = (char: CharAccount): void => {
//     console.log(`The player ${char.name} has the id ${char.level}`);
//     }
// const john = new UserAccount("John", 123);
// console.log(john);
// console.log(john.age);
// john.logDetails();
const john = new CharAccount("John", 123, "johnmaster", 80);
john.logDetails();
console.log(john.level);
// john.logCharDetails();
console.log(john.getLevel);
john.setLevel = 499;
console.log(john);
