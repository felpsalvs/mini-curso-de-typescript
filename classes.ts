class UserAccount {
  name: string;
  age: number;
  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    logDetails(): void {
        console.log(`The player ${this.name} has the id ${this.id}`);
        }
}

const john = new UserAccount("John", 123);
console.log(john);
console.log(john.age);
john.logDetails();

