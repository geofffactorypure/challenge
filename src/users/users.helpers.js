const generateId = (idLength) => {
    let result = ""
    const alphanumericSet = "1234567890qwertyuiopasdfghjklzxcvbnm".split("")
    for (let i = 0; i < idLength; i++) {
        result += String(alphanumericSet[Math.floor(Math.random() * alphanumericSet.length)])
    }
    return result
}

module.exports = {
    generateId
}