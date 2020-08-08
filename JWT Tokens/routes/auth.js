const router    = require('express').Router();
const User      = require('../model/User');
const bcrypt    = require('bcryptjs');
const jwt       = require('jsonwebtoken');
const { registerValidation, loginValidation} = require('../validation');


router.post('/register', async (req,res) => {  
   
        //VALIDATING DATA BEFORE MAKING USER
            // const validation = schema.validate(req.body); 
            // const {error} = schema.validate(req.body);
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
        //CHECKING IF USER ALREADY EXISTS
    const emailExists = await User.findOne({email : req.body.email});
    if(emailExists) return res.status(400).send('Email Already Exists');

        //HASHING THE PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //CREATING NEW USER 
    const user = new User({
       name     : req.body.name,
       email    : req.body.email,
       password : hashedPassword
   });

   try{
        const savedUser = await user.save();
        res.send({user : user._id});
    }catch(err){
       res.status(400).send(err);
    }

});

router.post('/login',async (req,res) => {
        //VALIDATING THE INPUTS
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

        //CHECKING IF USER ALREADY EXISTS
    const user = await User.findOne({email : req.body.email});
    if(!user) return res.status(400).send("Email doesn't exist");
        //CHECKING IF PASSWORD IS CORRECT
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid Password');

        //CREATE AND ASSIGN A TOKEN
    const token = jwt.sign({_id : user._id}, process.env.TOKEN_SECRET); 
    res.header('auth-token', token).send(token);
});



module.exports = router;