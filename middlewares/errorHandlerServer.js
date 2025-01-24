// to get error if server has errors

const errorHandlerServer = (err, req, res, next) => {
    res.status(500).json({
        status: 500,
        error: err.message
    })
}

module.exports = errorHandlerServer