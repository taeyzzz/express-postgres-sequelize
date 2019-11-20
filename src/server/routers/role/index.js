const express = require("express")
const router = express.Router()
const models = require("../../../db/models")
const Roles = models.Roles

router.get("/", async (req, res) => {
  try {
    const results = await Roles.findAll({ include: ["users"] })
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

module.exports = router
