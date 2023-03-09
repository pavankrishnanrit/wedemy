const { sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //   created_on: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //   },
    //   updated_on: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //   },
  });
  return User;
};
