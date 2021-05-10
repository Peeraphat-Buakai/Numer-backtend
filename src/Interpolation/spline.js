const Spline = require("cubic-spline")
const result = async (val) => {
  console.log(val);
  const spline =new Spline(val.x,val.y)
  let assige = spline.at(val.n)
  console.log('Ass--->', assige);

  let array=[]
  array.push({ value: assige })


  return array
}

module.exports = { result }