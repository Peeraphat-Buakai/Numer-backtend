const result = async (x, y) => {
  var arr = []
  console.log('x,y', x, y)
  var send = { y_sum: -10 }
  // var send
  // var y_sum = -10
  console.log("SSSS", send.y_sum);

  while (send.y_sum < 0) {
    var data = await test(x)
    arr.push(data)
    send.y_sum = data.y
    x = x + y
    console.log("x===", x);
  }
  return arr
}

const test = (x) => {
  y_sum = (2 * x) - 3
  console.log("Y===", y_sum);
  data = {
    x: x,
    y: y_sum
  }
  return data
}

module.exports = { result }