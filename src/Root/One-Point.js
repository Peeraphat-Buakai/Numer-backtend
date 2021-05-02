const result = async (x) => {
  let arr = []
  var num = 0
  for (let index = 0; index < 2; index++) {
    if (index < 1) {
      send1 = await cal1(x, num)
      arr.push(send1)
    }
    else {
      let result = await recursive([], send1.x, send1.num)
      result.forEach(element => {
        arr.push(element)
      });
    }
  }
  console.log(arr);
  return arr
}

const recursive = async (arr,x, num) => {
  return new Promise((resolve) => {
    let send2 = cal2(x, num)
    x = send2.x
    console.log('X -------',x);
    num = send2.num
    arr.push(send2)
    if (send2.Es > 0.000001) {
      return resolve(recursive(arr, x, num))
    } else {
      return resolve(arr)
    }
  })
}

const cal1 = (x, num) => {
  var Xi = (2 - (Math.exp(x / 4))).toFixed(8)
  num++
  data = {
    num: num,
    x: Xi,
    Es: ""
  }
  return data
}

const cal2 = (x, num) => {
  var Xi = (2 - (Math.exp(x / 4))).toFixed(8)
  num++
  Es = ((Xi - x) / Xi).toFixed(9)
  data = {
    num: num,
    x: Xi,
    Es: Math.abs(Es).toFixed(7)
  }
  return data
}

module.exports = { result }