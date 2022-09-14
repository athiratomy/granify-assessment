const Cat = require("./cat");
const Dog = require("./dog");
// const mysql = require("./homework.sql");

function logStats(msg) {
  console.log(msg);
}

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "animaldb",
// });

// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("DB connection OK");
//   logStats("DB connection OK")
// });

function saveTest() {
  const cat = new Cat();
  cat.setName("Tommy");
  var sql = `insert into Animals(animalname,age,favoritefood) values ('${cat.name}',${cat.age}, '${cat.favoriteFood}');`;
  logStats(`Insert query generated successfully: ${sql}`);
  //   this.connect.query(sql, (err, result) => {
  //     if (err) throw err;
  //     if (result) {
  //       logStats("Successfully updated");
  //     }
  //   });

  const dog = new Dog();
  dog.setName("Kaiser");
  var sql = `insert into Animals(animalname,age,favoritefood) values ('${dog.name}',${dog.age}, '${dog.favoriteFood}');`;
  logStats(`Insert query generated successfully: ${sql}`);
  //   this.connect.query(sql, (err, result) => {
  //     if (err) throw err;
  //     if (result) {
  //       logStats("Successfully updated");
  //     }
  //   });
}

function savePetShop() {
  for (let i = 0; i < 3; i++) {
    animalsInsert(new Cat(), new Dog());
  }
}

function animalsInsert(cat, dog) {
  var sql = `insert into Animals(animalname,age,favoritefood) values ('${cat.name}',${cat.age}, '${cat.favoriteFood}');`;
  logStats(`Insert query generated successfully: ${sql}`);
  // this.connect.query(sql, (err, result) =>
  // {
  //     if (err) throw err;
  //     if (result)
  //     {
  //         logStats("Successfully updated");
  //     }
  //   });

  var sql = `insert into Animals(animalname,age,favoritefood) values ('${dog.name}',${dog.age}, '${dog.favoriteFood}');`;
  logStats(`Insert query generated successfully: ${sql}`);
  // this.connect.query(sql, (err, result) =>
  // {
  //     if (err) throw err;
  //     if (result)
  //     {
  //         console.log("Successfully updated");
  //     }
  //   });
}

savePetShop();
saveTest();
