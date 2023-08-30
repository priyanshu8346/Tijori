const express = require('express');
// this router is different from react router 
const router = express.Router();
// user schema import made by us
const User = require('../models/User');
// for validation package 
const { body, validationResult } = require('express-validator');
// npm package for password hashing  
const bcrypt = require('bcryptjs');

// web token
const jwt = require('jsonwebtoken');
// for jwt token secret code
const JWT_SECRET = "greatnessloading...";
const fetchUser = require('../middleWare/fetchUser');
let success = false;



const arr = [body('name').isLength({ min: 3 }), body('email').isEmail(), body('password').isLength({ min: 7 })]

// create a user using: POST"/auth/createUser".  Doesn't require Auth
router.post('/createUser', arr, async (req, res) => {

  // if there are errors return error
  const success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  //  try and catch for preventing our programm from errors 
  try {
    // check weathr user exist 
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ success, error: "sorry a user with this email already exists" })
    }

    // using bcrypt to add salt and hash password
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);

    // user creation 
    create_user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPassword
    })
    // .then(user => res.json(user)).catch(err=> res.status(400).json(err));
    const data = {
      id: create_user.id
    }
    const authToken = jwt.sign(data, JWT_SECRET)

    res.json({ success: true, authToken, name: req.body.name });
  }
  catch (error) {
    console.log(error.message)
    res.status(500).send({ success, error: error.message })
  }
})

// authenticate a user no login required 

const arr2 = [body('email', "Enter valid email").isEmail(), body('password', "Password cannot be blank").exists()]

router.post('/login', arr2, async (req, res) => {

  // if there are errors return error
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(success, { errors: errors.array() });
  }
  // we will get user and password through req.body so using array destructuring 
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });
    // if user not exists 
    if (!user) {
      success = false;
      return res.status(400).send({ success, msg: "Enter correct credentials" });
    }
    // if exists we will compare password using bcrypt
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false;
      return res.status(400).send({ success, msg: "Enter correct credentials" });
    }
    // it is the data going inside your token 
    const data = {
      id: user.id
    }
    // it is the token send to user as a response 
    const authToken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.status(200).json({ success, authToken, name: user.name });
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ success, error: error.message })
  }
})

// get user details using post request after login auth/getUser 

router.post('/getUser', fetchUser, async (req, res) => {

  // if there are errors return error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const userId = req.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);

  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message });
  }
})
// to delete an existing user login required

router.post('/deleteUser', fetchUser, async (req, res) => {

  // if there are errors return error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const userId = req.id;
    const user = await User.findOneAndDelete({ _id: userId });
    res.send(user);

  } catch (error) {
    console.log(error.message)
    res.status(500).send({ error: error.message })
  }
})


module.exports = router
