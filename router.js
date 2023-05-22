const express = require('express')
const database = require('./database')
const router = new express.Router()

const query = "INSERT INTO customer_tbl SET ?"
router.post('/users', (req, res, next) => {
    
    let newUser = {
        Fname: req.body.Fname,
        Lname: req.body.Lname, 
        email: req.body.email,
    }

    database.query(query, newUser, (err, results) => {
        if (err){
            throw error
        }
        else{
            res.send(newUser)
        }

    })
})

module.exports = router