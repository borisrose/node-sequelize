const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/connection")


const Seller = sequelize.define('Seller',{
    email : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    password : {
        type: DataTypes.TEXT,
        allowNull: false,
    }

}, { 
    tableName: "sellers",
})

console.log(Seller === sequelize.models.Seller)

module.exports = Seller