const regression = require("regression")
const result = async (val) => {
  console.log(val);
  // let assige = regression.linear(val.A).predict(val.p)
  let assige = regression.polynomial(val.A, { p: val.p })
  console.log('Ass--->', assige.points.toString());

  let array = []
  array.push({ string: assige.string ,  equation: assige.equation.toString() ,points: assige.points.toString(),r2:assige.r2.toString()})
  // array.push()
  return array

  // return assige
}

module.exports = { result }