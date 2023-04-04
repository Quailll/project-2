const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {
  checkPassword(login) {
    return bcrypt.compare(login, this.password)
  }
}

User.init(
  {
    id: {

    }
    userName: {
      type: DataTypes.STRING,
    },
    password: {
    }
  },
  { sequelize, modelName: "user" }
);

module.exports = User;
