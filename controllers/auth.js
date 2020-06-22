//for the route logics
const User = require('../models/user');
const router = require('express').Router();
const validator = require('express-validator');


exports.register = async(req,res)=>{

    const user = new User({

        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    });

    try{

        const savedUser = await user.save();
        res.status(200).json(savedUser);

    }catch(err){

        res.status(400).json(err);

    }

}

module.exports = router;