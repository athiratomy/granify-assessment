const Cat = require("./cat");
const Data = require("./data");
const Dog = require("./dog");

const cat = new Cat();
console.log(`Name is currently ${cat.getName()}`);

cat.setName("Garfield");

console.log(`Name has been changed to  ${cat.getName()}`);

let data = new Data("database");

data.insert("Cat", cat);

cat.speak("MEOWWW!!!!"); //The passed value will be printed
cat.speak(); //Default value will be printed
cat.setName("Tom");
cat.getAverageNameLength();
const dog = new Dog();
dog.speak("Barrkkk!");
