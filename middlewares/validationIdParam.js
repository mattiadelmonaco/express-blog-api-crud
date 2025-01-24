// validation id

const middlewareValidationId = (req, res, next) => {
    if (isNaN(req.params.id)) {
        return res.status(400).json({
            status: 400,
            error: "Bad Request",
            message: "ID inserito non correto"
        })
    }
    next()
}

module.exports = middlewareValidationId