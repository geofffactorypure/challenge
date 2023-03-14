const singleNumber = require("./singleNumber.js")

console.log(singleNumber([1,1,2,2,3]) == 3 ? "PASS" : "FAILED", "[1,1,2,2,3] == 3")
console.log(singleNumber([1]) == 1 ? "PASS" : "FAILED", "[1] == 1")
console.log(singleNumber([]) == null ? "PASS" : "FAILED", "[] == null")
console.log(singleNumber([5,5,4,4,3,1,1,2,2,6,6,7,7,8,8,9,9,10,10]) == 3 ? "PASS" : "FAILED", "[5,5,4,4,3,1,1,2,2,6,6,7,7,8,8,9,9,10,10] == 3")