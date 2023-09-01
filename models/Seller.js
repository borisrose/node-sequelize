const { Sequelize, DataTypes, literal } = require("sequelize");
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
    },

    created_at: {
        type: DataTypes.DATE,
        defaultValue : literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },

    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    }


}, { 
    tableName: "sellers",
})

console.log(Seller === sequelize.models.Seller)

module.exports = Seller