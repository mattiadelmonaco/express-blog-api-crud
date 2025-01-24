// to get error (in JSON) if a route is not found

const notFound = (req, res, next) => {
    res.status(404).json({
        status: 404,
        error: "Not Found",
        message: "Rotta non trovata"
    })
}

module.exports = notFound