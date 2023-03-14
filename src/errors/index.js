const methodNotAllowed = (req, res, next) => {
    next({ status: 400, message: "Method not allowed on this route" });
}
const notFound = (req, res, next) => {
    next({ status: 404, message: `Path not found: ${req.originalUrl}` });
}
const errorHandler = (err, req, res, next) => {
    const { status = 500, message = "Something went wrong!" } = err
    return res.status(status).json({
        success: false,
        message
    })
}
module.exports = {
    methodNotAllowed,
    notFound,
    errorHandler
}