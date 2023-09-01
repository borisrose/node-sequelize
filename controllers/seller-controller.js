const { Seller } = require('../models')
const bcrypt = require('bcrypt')


const SellerController = {

    //méthode // middleware
    create : async(req, res) => {

        const { email, password } = req.body

        if(!email || !password) {
            return res.status(400).json({ message: 'Missing Data' });
        }

        const oldSeller = await Seller.findOne({ where: {
            email: email
        }})

        if(oldSeller){
            return res.status(401).json({ message : 'invalid data'})
        }

        try {
            const seller = await Seller.create({
                email: email,
                password: bcrypt.hashSync(password, 10)
            })

            return res.status(201).json(seller)
    
        }catch(err){

            console.trace(err)
        }
       

    }

}

module.exports = SellerController