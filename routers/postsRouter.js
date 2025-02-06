// import middlewareValidationId
const middlewareValidationId = require("../middlewares/validationIdParam");

// controllers imports
const postsCrontroller = require("../controllers/postsController");

// import express and create router's variable
const express = require("express");
const router = express.Router();

// validation on ID calls
router.use("/:id", middlewareValidationId);

// Index
router.get("/", postsCrontroller.index);

// Show
router.get("/:id", postsCrontroller.show);

// Store
router.post("/", postsCrontroller.create);

// Update
router.put("/:id", postsCrontroller.update);

// Modify
router.patch("/:id", postsCrontroller.modify);

// Destroy
router.delete("/:id", postsCrontroller.destroy);

// DestroyAll
router.delete("/", postsCrontroller.destroyAll);

// exports
module.exports = router;
