const { getUser, createUser } = require("./users.service.js") // Database methods 
const { generateId } = require("./users.helpers.js") // Generates a random string, accepts length as a parameter

const get = async (req, res, next) => {

}

// Expects body to contain a user object with first_name and last_name properties
// You must generate an ID of length 8 for each user before adding them to the database
const post = async (req, res, next) => {

}

module.exports = {
    get,
    post
}