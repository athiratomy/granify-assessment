INSTRUCTIONS
-----------------------------------------------------------

STRUCTURE
-----------------------------------------------------------

animal.js: Parent class with getters and setters for age, name, and favoriteFood.
cat.js: Child of animal class inheriting all the above methods. In addition, it has its own methods.
dog.js: Child of animal class inheriting all the above methods and similar to cat class. It also has its own methods.

Creating a parent 'animal' class enables to add new child classes which can inherit the properties easily and reuse them. New properties or methods can be added to the parent class for extension/enhancement of this project. It'll be useful for unit testing in realtime project environments.



HOW TO EXECUTE
-----------------------------------------------------------

main.js: Can be run directly from the terminal using the command: node main.js

petShop.js: This has db connection code which has been commented for testing purposes. The two functions called inside this file will generate the insert queries which will be printed in the terminal through logStats() function. To execute, run the command: node petShop.js in the terminal.

SQL FILE
-----------------------------------------------------------

homework.sql: This file holds the database and table creation queries. Also, few sample insert queries have been added. 


TESTING
-----------------------------------------------------------

cat.test.js: This can be run by installing or including Jest