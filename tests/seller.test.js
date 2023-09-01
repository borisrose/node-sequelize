const app = require('../app')
const request = require('supertest')
const { Seller } = require('../models')
const { faker } = require('@faker-js/faker')
const bcrypt = require('bcrypt')

describe('Given the verb POST and the route api/sellers/create', ()=> {

    beforeEach(async() => {
        const testSeller = await Seller.findOne({
            where : {
                email : 'test@example.com'
            }
        })

        if(testSeller){
            await testSeller.destroy()
        }

   
    })

    afterEach(async() => {
        const testSeller = await Seller.findOne({
            where : {
                email : 'test@example.com'
            }
        })

       await testSeller.destroy()
    })
    describe('When an incoming request contains all necessary data', () => {
        it('response code should be 201', async() => {
            await request(app)
                .post('/api/sellers/create')
                .send({
                    email : 'test@example.com',
                    password : bcrypt.hashSync('10caroline!', 10),
               
                })
                .expect(201)

        })

    })

    describe('When an incoming request contains all necessary data to create a seller', () => {
        it('a new seller should be created and saved into the db', async() => {
            await request(app)
                .post('/api/sellers/create')
                .send({
                    email : 'test@example.com',
                    password : bcrypt.hashSync('10caroline!', 10),
                   
                })
                .set('Accept', 'application/json')
                .expect((res) => {
                    expect(res.body).toEqual(expect.objectContaining({email: 'test@example.com'}))
                })
               
               

        })

    })



    


})