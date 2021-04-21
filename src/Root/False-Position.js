const result = async (x, y) => {
  console.log('x,y', x, y)
  var send2 = { ESs: 20 }
  var array = []
  var send1
  for (let index = 0; index < 2; index++) {
    if (index === 0) {
      send1 = await Given(x, y)
      if (send1 === 'หาค่าไม่ได้') {
        return 'Fail'
      } else {
      }
    } else {
      while (send2.ESs > 0.000001) {
        send2 = await full(send1.xl_new, send1.xr_new, send1.x1)
        send1.xl_new = send2.xl_new
        send1.xr_new = send2.xr_new
        send1.x1 = send2.x1
        array.push(send2)
      }
    }
    array.push(send1)
  }
  return array
}

const Given = (xl, xr) => {
  // ---------------------step1---------------------------
  var xl_start = xl
  var xr_start = xr
  var fxl = parseFloat(((43 * xl) - 1).toFixed(6))
  var fxr = parseFloat(((43 * xr) - 1).toFixed(6))
  var check1 = fxl * fxr
  console.log("fxr = ", fxr)
  console.log("fxl= ", fxl);
  if (check1 < 0) {
    var x1 = parseFloat((((xl * fxr) - (xr * fxl)) / (fxr - fxl)).toFixed(6))
    var x1_first = parseFloat((((xl * fxr) - (xr * fxl)) / (fxr - fxl)).toFixed(6))
    var fx1 = parseFloat(((43 * x1) - 1).toFixed(6))
    // console.log("fx1 ===>", fx1);
    // console.log("x1 ===>", x1);
    var check2 = fx1 * fxr
    if (check2 > 0) {
      xr = x1
      var data = {
        xl_start: xl_start,
        xr_start: xr_start,
        xl_new: xl,
        xr_new: xr,
        x1: x1,
        x1_first: x1_first,
        fx1: fx1,
        ESs: ""
      }
      return data
    } else {
      xl = x1
      var data = {
        xl_start: xl_start,
        xr_start: xr_start,
        xl_new: xl,
        xr_new: xr,
        x1: x1,
        x1_first: x1_first,
        fx1: fx1,
        ESs: ""
      }
      return data
    }
  } else {
    return "หาคำตอบไม่ได้"
  }
}

const full = (xl, xr, x1_old) => {
  // ---------------------step1---------------------------
  var xl_start = xl
  var xr_start = xr
  var fxl = parseFloat(((43 * xl) - 1).toFixed(6))
  var fxr = parseFloat(((43 * xr) - 1).toFixed(6))
  var check1 = fxl * fxr
  console.log("fxr = ", fxr)
  console.log("fxl= ", fxl);
  if (check1 < 0) {
    var x1 = parseFloat((((xl * fxr) - (xr * fxl)) / (fxr - fxl)).toFixed(6))
    var x1_first = parseFloat((((xl * fxr) - (xr * fxl)) / (fxr - fxl)).toFixed(6))
    var fx1 = parseFloat(((43 * x1) - 1).toFixed(6))
    // console.log("fx1 ===>", fx1);
    // console.log("x1 ===>", x1);
    var check2 = fx1 * fxr
    if (check2 > 0) {
      var ESs = (x1 - x1_old) / x1
      xr = x1
      var data = {
        xl_start: xl_start,
        xr_start: xr_start,
        xl_new: xl,
        xr_new: xr,
        x1: x1,
        x1_first: x1_first,
        fx1: fx1,
        ESs: Math.abs((ESs).toFixed(6))
      }
      return data
    } else {
      var ESs = (x1 - x1_old) / x1
      xl = x1
      var data = {
        xl_start: xl_start,
        xr_start: xr_start,
        xl_new: xl,
        xr_new: xr,
        x1: x1,
        x1_first: x1_first,
        fx1: fx1,
        ESs: Math.abs((ESs).toFixed(6))
      }
      return data
    }
  } else {
    return "หาคำตอบไม่ได้"
  }
}



module.exports = { result }