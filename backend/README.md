# Installation
To start the database, you must first have mySQL on your computer.

You will need to make a copy of the .sample-env file and put it at the same level (root of the backend). You will then have to rename it to .env and fill in the necessary connection information.

In a terminal > cd backend :

- [x] npm install
- [x] npx sequelize db:migrate
- [x] npx sequelize db:seed:all
- [x] nodemon server

This will give you access to two user profiles (a user and an administrator)