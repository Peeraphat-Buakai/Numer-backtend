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
        send2 = await full(send1.xl_new, send1.xr_new, send1.xm)
        send1.xl_new = send2.xl_new
        send1.xr_new = send2.xr_new
        send1.xm = send2.xm
        array.push(send2)
        // console.log("Xm ---->",send1.xm);
      }
    }
    array.push(send1)
  }
  return array
}

const Given = (xl, xr) => {
  // ---------------------step1---------------------------
  // console.log(xl,xr);
  var xl_start = xl
  var xr_start = xr
  var fxl = (Math.pow(xl, 4) - 13)
  var fxr = (Math.pow(xr, 4) - 13)
  var check1 = fxl * fxr
  if (check1 < 0) {
    var xm = (xl + xr) / 2
    var xm_first = (xl + xr) / 2
    // console.log("Xm ====>",xm);
    var fxm = (Math.pow(xm, 4) - 13)
    var check2 = fxm * fxr
    if (check2 > 0) {
      xr = xm
      var data = {
        xl_start: xl_start,
        xr_start: xr_start,
        xl_new: xl,
        xr_new: xr,
        xm: xm,
        xm_first: xm_first,
        fxm: fxm,
        ESs: ""
      }
      return data
    } else {
      xl = xm
      var data = {
        xl_start: xl_start,
        xr_start: xr_start,
        xl_new: xl,
        xr_new: xr,
        xm: xm,
        xm_first: xm_first,
        fxm: fxm,
        ESs: ""
      }
      return data
    }
  } else {
    return "หาคำตอบไม่ได้"
  }
}

const full = (xl, xr, xm_old) => {
  // console.log("Xl    == ",xl);
  // console.log("Xr   == ", xr);
  // console.log("Xm_old == ", xm_old);
  var xl_start = xl
  var xr_start = xr
  var fxl = (Math.pow(xl, 4) - 13)
  var fxr = (Math.pow(xr, 4) - 13)
  var check1 = fxl * fxr
  if (check1 < 0) {
    var xm = (xl + xr) / 2
    var fxm = (Math.pow(xm, 4) - 13)
    var check2 = fxm * fxr
    if (check2 > 0) {
      var ESs = (xm - xm_old) / xm
      // console.log(ESs, xm, xm_old)
      xr = xm
      var data = {
        xl_start: xl_start,
        xr_start: xr_start,
        xl_new: xl,
        xr_new: xr,
        xm: xm,
        xm_old: xm_old,
        fxm: fxm,
        ESs: Math.abs(ESs)
      }
      return data
    } else {
      var ESs = (xm - xm_old) / xm
      // console.log(ESs, xm, xm_old)
      xl = xm
      var data = {
        xl_start: xl_start,
        xr_start: xr_start,
        xl_new: xl,
        xr_new: xr,
        xm: xm,
        xm_old: xm_old,
        fxm: fxm,
        ESs: Math.abs(ESs)
      }
      return data
    }
  } else {
    return "หาคำตอบไม่ได้"
  }
}


module.exports = { result }