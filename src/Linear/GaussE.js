var linSystem = require('linear-equation-system');
const result = async (val)=>{

  console.log(val);
  const test = (linSystem.solve(val.z, val.a))
  console.log(test);

  return test  

}

module.exports = { result }