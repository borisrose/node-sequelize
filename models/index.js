const Seller = require('./Seller')
const Product = require('./Product')
const sequelize = require('../database/connection')


Seller.hasMany(Product, {
    foreignKey: 'sellerId', 
    as: 'products',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
}); 

Product.belongsTo(Seller, {
    foreignKey: 'sellerId',
    as: 'seller',
});


sequelize.sync({ alter : true})

module.exports = {

    Seller,
    Product,
}



