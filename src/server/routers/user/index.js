const bcrypt = require('bcrypt');
const express = require("express")
const router = express.Router()
const models = require("../../../db/models")
const Users = models.Users

router.get("/", async (req, res) => {
  try {
    const results = await Users.findAll()
    console.log(results);
    res.json({
      data: results
    })
  }
  catch (err) {
    res.status(400).json({
      error: err
    })
  }
})

router.post("/", async (req, res) => {
  const { email, password, firstname, lastname, roleId } = req.body
  try {
    const passwordHash = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS))
    const result = await Users.create({
      email,
      password: passwordHash,
      firstname,
      lastname,
      roleId
    })
    console.log(result);
    res.json({
      data: result
    })
  }
  catch (err) {
    res.status(400).json({
      error: err
    })
  }
})

router.post("/login", async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await Users.findOne({
      where: {
        email
      },
      include: ["role"]
    })
    const isPasswordValid = await bcrypt.compare(password, user.password)
    console.log(isPasswordValid);
    if(isPasswordValid){
      res.json({
        data: user
      })
    }
    else{
      throw new Error("Unauthorized.")
    }
  }
  catch (err) {
    console.log(err);
    res.status(400).json({
      error: err
    })
  }
})

module.exports = router
