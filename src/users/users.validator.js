// THIS IS YOUR VALIDATOR, NOTHING SHOULD NEED EDITING HERE

const validateUser = (req, res, next) => {
    const { user } = req.body
    if (!user) {
        return next({
            status: 400,
            message: "Body is missing user"
        })
    }
    if (!user.first_name || !user.last_name) {
        return next({
            status: 400,
            message: "User must include first_name and last_name properties"
        })
    }
    return next()
}

module.exports = {
    validateUser
}