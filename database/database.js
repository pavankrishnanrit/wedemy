if(process.env.NODE_ENV !== 'production') require('dotenv').config()

const Sequelize = require("sequelize")

const db = {}

const sequelize = new Sequelize.Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
    logging: false
})

sequelize.authenticate().then((result) => {console.log("Database Connected")}).catch((err) => {console.log(err);})

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Note = require("../database/models/note.model")(sequelize, Sequelize.DataTypes)
db.User = require("../database/models/user.model")(sequelize, Sequelize.DataTypes)
module.exports = db