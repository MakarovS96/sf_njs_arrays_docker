const arrays = require("sf_njs_arrays")

let arr = JSON.parse(process.argv[2])
let elem = JSON.parse(process.argv[3])

console.log(arrays.append(arr, elem))
console.log(arrays.prepend(arr, elem))
