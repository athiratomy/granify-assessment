const Animal = require("./animal");

class Dog extends Animal {
  constructor() {
    super();
    this.name = "";
    this.age = Math.floor(Math.random() * (10 - 5 + 1) + 5); //max-min +1
    this.favoriteFood = "";
    this.nameList = [];
    this.ageCounter = 0;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getFavoriteFood() {
    return this.favoriteFood;
  }

  setName(name) {
    this.name = name;
    this.nameList.push(name);
    console.log(this.nameList);
  }

  setAge(age) {
    this.age = age;
  }

  setFavoriteFood(favoriteFood) {
    this.favoriteFood = favoriteFood;
  }

  speak(param = "woof") {
    console.log(param);
    if (this.ageCounter >= 5) {
      this.age++;
      this.ageCounter = 0;
    } else {
      this.ageCounter++;
    }
  }

  getNames() {
    return this.nameList;
  }

  getAverageNameLength() {
    let totalLength = 0;
    let arrayLength = this.nameList.length;

    for (let i = 0; i < arrayLength; i++) {
      totalLength = totalLength + this.nameList[i].length;
    }
    console.log(totalLength / arrayLength);
  }
}

module.exports = Dog;
