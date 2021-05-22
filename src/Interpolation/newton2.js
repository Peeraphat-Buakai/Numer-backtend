const result = async (val) => {
  console.log('Value',val);
  let arr = []
  let arr2 = []
  const mX = val.x
  const Y0 = val.y
  const value = val.assige
  const mY = [];
  let n = mX.length

  for (let i = 0; i < n; i++) {
    mY[i] = [];
    mY[i][0] = Y0[i];
  }
  console.log('MY',mY);

  let proterm = (i, value, mX) => {
    let pro = 1;
    for (let j = 0; j < i; j++) {
      pro = pro * (value - mX[j]);
    }
    // console.log('Pro--->',pro);
    return pro;
  }

  function dividedDiffTable(mX, mY, n) {
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < n - i; j++) {
        mY[j][i] = (mY[j][i - 1] - mY[j + 1][i - 1]) / (mX[j] - mX[i + j]);
      }
    }
    console.log('C-------->', mY[0]);
    for (let i = 0; i < mY[0].length; i++) {
      arr2[i]= mY[0][i].toFixed(20)
    }
    console.log('ArrayC ---->',arr2);
    
  }

  let applyFormula = (value, mX, mY, n) => {
    let sum = mY[0][0]
    for (let i = 1; i < n; i++) {
      sum = sum + (proterm(i, value, mX) * mY[0][i])
      console.log('sum---->',i,sum);
    }
    return sum;
  }

  dividedDiffTable(mX, mY, n)
  let f = applyFormula(value, mX, mY, n)
  console.log('Ans-->',f)
  arr.push({ x: f })
  return arr
  
}







module.exports = { result }
