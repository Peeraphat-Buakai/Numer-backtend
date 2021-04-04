const result = async (x) => {
  var arr = []
  var send2 = { Es: 20 }
  // var Es = 20
  var num = 0
  for (let index = 0; index < 2; index++) {
    if (index < 1) {
      send1 = await cal1(x, num)
      arr.push(send1)
    }
    else {
      while (send2.Es > 0.000001) {
        console.log(send1.x);
        send2 = await cal2(send1.x, send1.num)
        send1.x = send2.x
        // console.log("X1 ===", send1.x);
        send1.num = send2.num
        // console.log("num1 ===", send1.num);
        arr.push(send2)
      }
    }
  }
  return arr
}

const cal1 = (x, num) => {
  var Xi = (2 - (Math.exp(x / 4))).toFixed(7)
  num++
  // console.log(num, Xi,)
  data = {
    num: num,
    x: Xi,
    Es: ""
  }
  return data
}

const cal2 = (x, num) => {
  // console.log(x);
  var Xi = (2 - (Math.exp(x / 4))).toFixed(7)
  num++
  Es = ((Xi - x) / Xi).toFixed(9)
  console.log(num, Xi, Es)
  data = {
    num: num,
    x: Xi,
    Es: Math.abs(Es).toFixed(7)
  }
  return data
}

module.exports = { result }