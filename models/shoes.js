const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Shoes extends Model {}

Shoes.init({
  name: DataTypes.STRING,
  brand: DataTypes.STRING,
  style: DataTypes.STRING,
});
