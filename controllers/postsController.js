// imports
const posts = require("../data/postsData");

// Index
const index = (req, res) => {
  // throw new Error("Errore interno del server")

  let filteredPosts = posts;

  if (req.query.tags) {
    filteredPosts = posts.filter((post) => post.tags.includes(req.query.tags));
  }

  res.json(filteredPosts);
};

// Show
const show = (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find((elm) => elm.id === id);

  if (!post) {
    return res.status(404).json({
      status: 404,
      error: "Not Found",
      message: `Post con ID ${id} non trovato!`,
    });
  }

  res.json(post);
};

// Store
const create = (req, res) => {
  const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1; //se il post è vuoto e vuoi aggiungere dà 1 come id

  const newPost = {
    id: newId,
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags,
    category: req.body.category,
    available: req.body.available,
  };

  posts.push(newPost);
  console.log(newPost);

  res.status(201).json({
    status: 201,
    message: "Post aggiunto con successo!",
    post: newPost,
  });
};

// Update
const update = (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find((elm) => elm.id === id);

  if (!post) {
    return res.status(404).json({
      status: 404,
      error: "Not Found",
      message: `Post con ID ${id} non trovato!`,
    });
  }

  post.title = req.body.title || "Titolo mancante";
  post.content = req.body.content || "Contenuto mancante";
  post.image =
    req.body.image ||
    "https://www.consultingmc.info/wp-content/uploads/2024/01/No-Image-Placeholder.svg_.png";
  post.tags = req.body.tags || "Tags mancanti";

  console.log(post);
  res.status(200).json({
    status: 200,
    message: "Post aggiornato con successo",
    post,
  });
};

// Modify
const modify = (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find((elm) => elm.id === id);

  if (!post) {
    return res.status(404).json({
      status: 404,
      error: "Not Found",
      message: `Post con ID ${id} non trovato!`,
    });
  }

  post.title = req.body.title || post.title;
  post.content = req.body.content || post.content;
  post.image = req.body.image || post.image;
  post.tags = req.body.tags || post.tags;

  console.log(post);
  res.status(200).json({
    status: 200,
    message: "Post aggiornato con successo",
    post,
  });
};

// Destroy
const destroy = (req, res) => {
  const id = parseInt(req.params.id);

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      status: 404,
      error: "Not Found",
      message: `Post con ID ${id} non trovato!`,
    });
  }

  posts.splice(posts.indexOf(post), 1);
  console.log(posts);
  return res.sendStatus(204);
};

// DestroyAll
const destroyAll = (req, res) => {
  // throw new Error("Errore interno del server")
  posts.splice(0, posts.length);
  return res.sendStatus(204);
};

module.exports = { index, show, create, update, modify, destroy, destroyAll };
