const { getUser, createUser } = require("./users.service.js") // Database methods 
const { generateId } = require("./users.helpers.js") // Generates a random string, accepts length as a parameter

// Finish this route
// The route must get the user with the getUser function and return it as json in the response
const get = async (request, response, next) => {

}

// Finish this route
// Expects body to contain a user object with first_name and last_name properties
// You must generate an ID of length 8 for each user before adding them to the database
// Call the createUser function with a new object featuring first_name, last_name, and id
// Send back a success message on the response
const post = async (request, response, next) => {

}

module.exports = {
    get,
    post
}