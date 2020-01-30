const Sequelize = require("sequelize");
const db = require("../db");

const Geapp = db.define(
  "geapp_datos",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: Sequelize.STRING
    },
    latitud: {
      type: Sequelize.STRING
    },
    longitud: {
      type: Sequelize.STRING
    },
    fecha: {
      type: Sequelize.DATE
    }
  },
  {
    timestamps: false
  }
);

module.exports = Geapp;
