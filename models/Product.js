const { Sequelize, DataTypes, literal } = require("sequelize");
const sequelize = require("../database/connection")

// class Product extends Model {}
const Product = sequelize.define('Product', {
    description : {
        type : DataTypes.TEXT,
        allowNull: false
    },


    url: {
        type : DataTypes.STRING,
        allowNull: false
    },

    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    sellerId : {
        type: DataTypes.INTEGER,
        allowNull: false
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

    tableName: "products"
})

console.log(Product === sequelize.models.Product)


module.exports = Product