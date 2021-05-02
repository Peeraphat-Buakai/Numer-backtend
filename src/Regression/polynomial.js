const regression = require("regression")
const result = async (val) => {
  console.log(val);
  // let assige = regression.linear(val.A).predict(val.p)
  let assige = regression.polynomial(val.A, { p: val.p })
  console.log('Ass--->', assige);
  return assige
}

module.exports = { result }