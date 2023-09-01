const dotenv = require('dotenv')
dotenv.config()
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    define: {
        timestamps: true,
        createdAt : "created_at",
        updatedAt : "updated_at",
    }
   
});

const test = async() => {

    try {
        await sequelize.authenticate()
        console.log('connection established')
    }catch(err){
        console.error(err)
    }
  
}

test()


module.exports = sequelize