const regress = require("multiregress")
const result = async (val) => {
  console.log(val);
  let array=[]
  let assige = regress.regression(val.A)
  console.log('Ass--->', assige);
  for (let i = 0; i < assige.length; i++) {
    array[i] = parseFloat(assige[i].toFixed(6))
  }
  console.log(array);
  return array
}

module.exports = { result }