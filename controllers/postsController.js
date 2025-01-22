// imports

const posts = require("../data/postsData")

// crud functions

// Index
const index = (req, res) => {
    res.json(posts)
}

// Show
const show = (req, res) => {

    if (isNaN(req.params.id)) {
        return res.sendStatus(400)
    }

    const post = posts.find((elm) => elm.id == req.params.id)

        if (post) {
            res.json(post)
        } else {
            res.sendStatus(404)
        }
}

// Create
const create = (req, res) => {
    res.send("Creo un nuovo post ✔")
}

// Update
const update = (req, res) => {

    if (isNaN(req.params.id)) {
        return res.sendStatus(400)
    }

    const post = posts.find((elm) => elm.id == req.params.id)

    if (post) {
        res.send(`Modifico interamente il post con id ${req.params.id}`)
    } else {
        res.sendStatus(404)
    }
}

// Modify
const modify = (req, res) => {

    if (isNaN(req.params.id)) {
        return res.sendStatus(400)
    }

    const post = posts.find((elm) => elm.id == req.params.id)

    if (post) {
        res.send(`Modifico parzialmente il post con id ${req.params.id}`)
    } else {
        res.sendStatus(404)
    }
}

// Destroy
const destroy = (req, res) => {

    if (isNaN(req.params.id)) {
        return res.sendStatus(400)
    }

    const post = posts.find((elm) => elm.id == req.params.id)

    if (post) {
        res.send(`Elimino il post con id ${req.params.id}`)
    } else {
        res.sendStatus(404)
    }
}

module.exports = {index, show, create, update, modify, destroy}