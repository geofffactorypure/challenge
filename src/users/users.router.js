// THIS IS YOUR USERS ROUTER, NOTHING SHOULD NEED EDITING HERE

const router = require("express").Router()
const controller = require("./users.controller.js")
const validator = require("./users.validator.js")
const { methodNotAllowed } = require("../errors/index.js")

router.route("/")
    .get(controller.get)
    .post([validator.validateUser, controller.post])
    .all(methodNotAllowed)

module.exports = router