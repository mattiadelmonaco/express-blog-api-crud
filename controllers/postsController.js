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

    const id = parseInt(req.params.id)

    const post = posts.find((post) => post.id === id)

    if (post) {
        posts.splice(posts.indexOf(post), 1)
        console.log(posts)
        return res.sendStatus(204)
    } else {
        res.status(404)
        return res.json({
            status: 404, 
            error: "Not Found", 
            message: `Post con ID ${id} non trovato!`
        })
    }
}

module.exports = {index, show, create, update, modify, destroy}