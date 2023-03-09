const { DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define(
    "documents",
    {
      blog_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      blog_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      blog_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      blog_author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      blog_file: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      // created_on: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      // updated_on: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
    },
    
  );
  return Note;
};
