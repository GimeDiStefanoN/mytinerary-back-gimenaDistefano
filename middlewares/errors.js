import createError from "http-errors";

export function notFound (req, res, next) {
    next(createError(404, 'Not Found'))
}
export function errorHandler (err, req, res, next) {
    console.error(err.stack)
    
    res.status(err.status || 500).json({
        status: err.status,
        message: ' Internal Server Error: ' + err.message
    })
}