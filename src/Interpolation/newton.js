const result = async(val) =>{

  let arr = []

  if (val.point.length === 2){
    send = await Line(val)
    arr.push({x:send})
  }
  else if((val.point).length === 3) {
    console.log('come 3');
    send = await Quadratic(val)
    arr.push({x:send})
  }
  else if((val.point).length > 3){
    console.log('come 4');
    send = await Quadratic2(val)
    arr.push({ x: send })
  }
  return arr
}

const Line = (val) => {
  console.log('Check Val--->',val);
  var fx = val.y[val.point[0]-1] + (val.assige*( (val.y[val.point[1]-1]-val.y[val.point[0]-1])/(val.x[val.point[1]-1]-val.x[val.point[0]-1]) ) )
  console.log('Fx', fx);
  return fx
}

const Quadratic = (val) => {
  console.log(val);

  var c0 = val.y[val.point[0]-1]
  console.log('C0------',c0);
  var c1 = (val.y[val.point[1] - 1] - val.y[val.point[0] - 1] )/(val.x[val.point[1]-1]- val.x[val.point[0]-1])
  console.log('C1---',c1);
  var c2 = ((((val.y[val.point[2] - 1] - val.y[val.point[1] - 1]) / (val.x[val.point[2] - 1] - val.x[val.point[1] - 1]))) - ((val.y[val.point[1] - 1] - val.y[val.point[0] - 1]) / ((val.x[val.point[1] - 1]) - val.x[val.point[0] - 1]))) / (val.x[val.point[2] - 1] - val.x[val.point[0] - 1])
  console.log('C2----', c2.toFixed(15));
  var fx = c0 + (c1 * (val.assige - val.x[val.point[0] - 1])) + (c2 * (val.assige - val.x[val.point[0] - 1]) * (val.assige - val.x[val.point[1] - 1]))
  console.log('CheckFx', fx);
  return fx
}

const Quadratic2 = (val) =>{
  console.log('Here',val);
  
  const mY = [];
  let n = mX.length

  for (let i = 0; i < n; i++) {
    mY[i] = [];
    mY[i][0] = Y0[i];
  }

  let proterm = (i, value, mX) => {
    let pro = 1;
    for (let j = 0; j < i; j++) {
      pro = pro * (value - mX[j]);
    }
    return pro;
  }

  function dividedDiffTable(mX, mY, n) {
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < n - i; j++) {
        mY[j][i] = (mY[j][i - 1] - mY[j + 1][i - 1]) / (mX[j] - mX[i + j]);
      }
    }
  }

  let applyFormula = (value, mX, mY, n) => {
    let sum = mY[0][0]
    for (let i = 1; i < n; i++) {
      sum = sum + (proterm(i, value, mX) * mY[0][i])
    }
    return sum;
  }

  dividedDiffTable(mX, mY, n)
    let f = applyFormula(value, mX, mY, n)
    // console.log(mY)


}


module.exports = { result }
