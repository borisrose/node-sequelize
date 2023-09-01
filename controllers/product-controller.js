const { Product } = require('../models')


const ProductController = {

    create: async(req, res) => {

        const { description, price, sellerId, url } = req.body

        if(!description || !price || !sellerId || !url){
            return res.status(400).json({ message : 'Missing Data'})
        }

        try {

            const newProduct = await Product.create({
                description,
                price,
                url,
                sellerId
            })

            res.status(201).json(newProduct)


        } catch(err){
            console.trace(err)
        }

    }



}


module.exports = ProductController


