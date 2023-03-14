// THESE ARE YOUR MOCK DATABASE FUNCTIONS, NOTHING SHOULD NEED EDITING HERE
// YOU CAN CONSIDER LOGGING THE USER TO THE CONSOLE A SUCCESSFUL POST

const getUser = async () => {
    return {
        id: 123456789,
        first_name: 'John',
        last_name: "Doe"
    }
}
const createUser = async (user) => {
    if (!user) {
        console.log("Database Error: User missing")
        return false
    }
    if (!user.id) {
        console.log("Database Error: User ID missing")
        return false
    }
    console.log("Successfully created user: ", user)
    return true
}

module.exports = {
    getUser,
    createUser
}