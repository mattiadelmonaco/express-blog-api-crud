// controllers imports
const postsCrontroller = require("../controllers/postsController")

// import express and create router's variable
const express = require("express")
const router = express.Router()

// Index 
router.get("/", postsCrontroller.index)

// Show
router.get("/:id", postsCrontroller.show)

// Create
router.post("/", postsCrontroller.create)

// Update
router.put("/:id", postsCrontroller.update)

// Modify
router.patch("/:id", postsCrontroller.modify)

// Destroy
router.delete("/:id", postsCrontroller.destroy)

// exports
module.exports = router