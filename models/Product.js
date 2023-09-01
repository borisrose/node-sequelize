const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/connection")

const Product = sequelize.define('Product', {
    description : {
        type : DataTypes.TEXT,
        allowNull: false
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    sellerId : {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {

    tableName: "products"
})

console.log(Product === sequelize.models.Product)


module.exports = Product