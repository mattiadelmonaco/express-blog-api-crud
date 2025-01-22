// imports
const posts = require("../data/postsData")

// import express and create router's variable
const express = require("express")
const router = express.Router()

// Index 
router.get("/", (req, res) => {
    res.json(posts)
})

// Show
router.get("/:id", (req, res) => {

    if (isNaN(req.params.id)) {
        return res.sendStatus(400)
    }

    const post = posts.find((elm) => elm.id == req.params.id)

        if (post) {
            res.json(post)
        } else {
            res.sendStatus(404)
        }
})

// Create
router.post("/", (req, res) => {
    res.send("Creo un nuovo post ✔")
})

// Update
router.put("/:id", (req, res) => {

    if (isNaN(req.params.id)) {
        return res.sendStatus(400)
    }

    const post = posts.find((elm) => elm.id == req.params.id)

    if (post) {
        res.send(`Modifico interamente il post con id ${req.params.id}`)
    } else {
        res.sendStatus(404)
    }
})

// Modify
router.patch("/:id", (req, res) => {

    if (isNaN(req.params.id)) {
        return res.sendStatus(400)
    }

    const post = posts.find((elm) => elm.id == req.params.id)

    if (post) {
        res.send(`Modifico parzialmente il post con id ${req.params.id}`)
    } else {
        res.sendStatus(404)
    }
})

// Destroy
router.delete("/:id", (req, res) => {

    if (isNaN(req.params.id)) {
        return res.sendStatus(400)
    }

    const post = posts.find((elm) => elm.id == req.params.id)

    if (post) {
        res.send(`Elimino il post con id ${req.params.id}`)
    } else {
        res.sendStatus(404)
    }
})

// exports
module.exports = router