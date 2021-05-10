const regression = require("regression")
const result = async (val) => {
  console.log(val);
  let assige = regression.linear(val.A).predict(val.p)
  console.log('Ass--->', assige);
  let array=[]
  array.push({value:assige.toString()})
  return array
}

module.exports = { result }