const { Sequelize, DataTypes } = require('sequelize');

//connection à la base de données
const database = new Sequelize(
  `mysql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}/${process.env.DB_DATABASE}`
);

database
  .authenticate()
  .then(() =>
    console.log('Vous êtes maintenant connecté à la base de donnée !')
  )
  .catch((err) => console.log('erreur d\'authentification: ' + err));

module.exports = {
  Sequelize,
  DataTypes,
  database,
};
