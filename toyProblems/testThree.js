const singleNumber = require("./singleNumber3.js")

const case1 = singleNumber([1,1,2,2,3,4]).map(digit => String(digit))
console.log(JSON.stringify(case1) == `["3","4"]` ? "PASS" : "FAILED", `[1,1,2,2,3,4] == [3,4]`)

const case2 = singleNumber([1,2]).map(digit => String(digit))
console.log(JSON.stringify(case2) == `["1","2"]` ? "PASS" : "FAILED", `[1,2] == [1,2]`)

const case3 = singleNumber([]).map(digit => String(digit)).filter(v => v !== "null" && v !== "undefined")
console.log(JSON.stringify(case3) == `[]` ? "PASS" : "FAILED", `[] == null`)

const case4 = singleNumber([5,5,4,4,3,1,1,2,2,6,6,7,7,8,8,9,9,10,10,37]).map(digit => String(digit))
console.log(JSON.stringify(case4) == `["3","37"]` ? "PASS" : "FAILED", `[5,5,4,4,3,1,1,2,2,6,6,7,7,8,8,9,9,10,10,37] == [3,37]`)
