abstract class UserAccount {
  public name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  logDetails(): void {
    console.log(`The player ${this.name} has the id ${this.age}`);
  }
}

class CharAccount extends UserAccount {
  private nickname: string;
  level: number;
  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);
    this.nickname = nickname;
    this.level = level;
  }
  get getLevel() {
    console.log("------GET------");
    return this.level;
  }
  set setLevel(level: number) {
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
