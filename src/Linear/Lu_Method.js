const math = require('mathjs')
const result = async (val) => {

  console.log(val);
  
  const x = math.lusolve(val.a, val.b)
  var y =[]
  for (let i = 0; i < x.length; i++) {
    y[i] = (x[i][0]).toFixed(6)
  }

  console.log('YYYYY',y);
}

module.exports = { result }