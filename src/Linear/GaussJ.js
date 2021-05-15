var rref = require('rref');
const result = async (val)=>{
  // console.log(val.z);
  const test = rref(val.z)
  console.log((test));
  return test
}

module.exports = { result }