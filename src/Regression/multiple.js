const regress = require("multiregress")
const result = async (val) => {
  console.log(val);
  let array=[]
  let array2 = []
  let assige = regress.regression(val.A)
  // console.log('Ass--->', assige);
  for (let i = 0; i < assige.length; i++) {
    array[i] = parseFloat(assige[i].toFixed(6))
    array2.push({value:array[i]})
  }
  // console.log(array);
  // let array2 = []
  // array2.push({ value: assige })
  return array2
}

module.exports = { result }