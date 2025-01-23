// imports

const posts = require("../data/postsData")

// crud functions

// Index
const index = (req, res) => {

    let filteredPosts = posts
    
    if (req.query.tags) {
        filteredPosts = posts.filter((post) => post.tags.includes(req.query.tags))
    } 
    
    res.json(filteredPosts)
}

// Show
const show = (req, res) => {

    const id = parseInt(req.params.id)

    const post = posts.find((elm) => elm.id === id)

        if (!post) {
            res.status(404)
            return res.json({
                status: 404, 
                error: "Not Found", 
                message: `Post con ID ${id} non trovato!`
            })
        } 
        
    res.json(post)
}

// Store
const create = (req, res) => {

    const newId = posts[posts.length - 1].id + 1

    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    posts.push(newPost)
    console.log(newPost)

    res.status(201)
    res.json({
        status: 201,
        message: "Post aggiunto con successo!",
        post: newPost
    })
}

// Update
const update = (req, res) => {
   
    const id = parseInt(req.params.id)

    const post = posts.find((elm) => elm.id === id)

    if (!post) {
        res.status(404)
        return res.json({
            status: 404, 
            error: "Not Found", 
            message: `Post con ID ${id} non trovato!` 
        })
    }

    post.title = req.body.title
    post.content = req.body.content
    post.image = req.body.image
    post.tags = req.body.tags

    console.log(post)
    res.status(200)
    res.json({
        status: 200,
        message: "Post aggiornato con successo",
        post
    })
}

// Modify
const modify = (req, res) => {

    const id = parseInt(req.params.id)

    const post = posts.find((elm) => elm.id === id)

    if (!post) {
        res.status(404)
        return res.json({
            status: 404, 
            error: "Not Found", 
            message: `Post con ID ${id} non trovato!` 
        })
    }

    if (req.body.title) {
        post.title = req.body.title;
      }
    if (req.body.content) {
    post.content = req.body.content;
    }
    if (req.body.image) {
    post.image = req.body.image;
    }
    if (req.body.tags) {
    post.tags = req.body.tags;
    }

    console.log(post)
    res.status(200)
    res.json({
        status: 200,
        message: "Post aggiornato con successo",
        post
    })
}

// Destroy
const destroy = (req, res) => {

    const id = parseInt(req.params.id)

    const post = posts.find((post) => post.id === id)

    if (!post) {
        res.status(404)
        return res.json({
            status: 404, 
            error: "Not Found", 
            message: `Post con ID ${id} non trovato!`
        }) 
    } 

    posts.splice(posts.indexOf(post), 1)
    console.log(posts)
    return res.sendStatus(204)
}

module.exports = {index, show, create, update, modify, destroy}