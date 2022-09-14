CREATE DATABASE 'animalsdb';

CREATE TABLE Animals (
    ID INT NOT NULL AUTO_INCREMENT = 100,
    AnimalName varchar (255), 
    Age int, 
    FavoriteFood varchar(255));

INSERT INTO Animals (AnimalName, Age, FavoriteFood) VALUES ("Lucy", 2, "Milk");
INSERT INTO Animals (AnimalName, Age, FavoriteFood) VALUES ("TIger", 3, "Meat");
