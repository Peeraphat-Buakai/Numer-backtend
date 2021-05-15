const result = async(val) =>{

  let arr = []

  if (val.point.length === 2){
    send = await Line(val)
    // x.push({ x: ass / detF })
    arr.push({x:send})
    // arr.push(send)
  }
  else if((val.point).length === 3) {
    console.log('come 3');
    send = await Quadratic(val)
  }
return arr
}

const Line = (val) => {
  console.log(val);
  var fx = val.y[val.point[0]-1] + (val.assige*( (val.y[val.point[1]-1]-val.y[val.point[0]-1])/(val.x[val.point[1]-1]-val.x[val.point[0]-1]) ) )
  console.log('Fx', fx);
  return fx
}

const Quadratic = (val) => {
  console.log(val);
  
  var c0 = val.y[val.point[0]-1]
  console.log('Coo------',c0);
  var c1 = (val.y[val.point[1] - 1] - val.y[val.point[0] - 1] )/(val.x[val.point[1]-1]- val.x[val.point[0]-1])
  console.log('C1---',c1);
  var c2 = (((val.y[val.point[2] - 1] - val.y[val.point[1] - 1]) / (val.x[val.point[2] - 1] - val.x[val.point[1] - 1]))) - ((val.y[val.point[1] - 1] - val.y[val.point[0] - 1]) / ((val.x[val.point[1] - 1])-val.x[val.point[0]-1]))
  console.log('C2----', c2.toFixed(10));
  var fx = c0 - (c1 * (val.assige - val.x[val.point[0] - 1])) + (c2 * ((val.assige - val.x[val.point[0] - 1]) * (val.assige - val.x[val.point[1] - 1])))

  console.log('Check', fx);

}


module.exports = { result }
