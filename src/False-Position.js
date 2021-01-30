const result = async (x, y) => {
  console.log('x,y', x, y)
  var send2 = { Ef: 20 }
  var array = []
  var send1
  for (let index = 0; index < 2; index++) {
    if (index === 0) {
      send1 = await Given(x, y)
      if (send1 === 'Cannot') {
        return 'Fail'
      } else {
        array.push(send1)
      }
    } else {
      console.log('เข้า else');
      while (send2.Ef > 0.000001) {
        send2 = await step1_4(send1.xl, send1.xr, send1.x1_old)
        send1.xl = send2.xl
        send1.xr = send2.xr
        send1.x1_old = send2.x1_old
        array.push(send2)
      }
    }
  }
  return array
}

const Given = (xl, xr) => {
  // ---------------------step1---------------------------
  console.log("xl---",xl);
  console.log("xr---", xr);
  var xxr = xr
  console.log("xxr ---",xxr);
  var fxl = (43*xl) - 1
  var fxr = (43 * xr) - 1
  if ((fxl > 0 && fxr < 0) || (fxl < 0)) {
    var x1 = ((xl*fxr) - (xr*fxl)) / (fxr-fxl)
    var fx1 = (43 * x1) - 1
    console.log("Xm ===", x1);
    console.log("Xfm ===", fx1);
    // ---------------------step2---------------------------
    var count = fx1 * fxr
    // ---------------------step3---------------------------
    if (count > 0) {
      xr = x1
      var news = {
        xl: xl,
        xr: xxr,
        fxl: fxl,
        fxr: fxr,
        fx1: fx1,
        ES: "",
      }
      return news
    } else {
      xl = x1
      var news = {
        xl: xl,
        xr: xxr,
        fxl: fxl,
        fxr: fxr,
        fx1: fx1,
        ES: "",
      }
      return news
    }
  } else {
    return "Cannot"
  }
}

const step1_4 = (xl, xr, x1_old) => {
  // ---------------------step1---------------------------
  var fxl = (43 * xl) - 1
  var fxr = (43 * xr) - 1
  if ((fxl > 0 && fxr < 0) || (fxl < 0)) {
    var x1= ((xl * fxr) - (xr * fxl)) / (fxr - fxl)
    var fx1 = (43 * x1) - 1
    // ---------------------step2---------------------------
    var count = fx1 * fxr
    // ---------------------step3---------------------------
    if (count > 0) {
      xr = x1
    } else {
      xl = x1
    }
    // ---------------------step4---------------------------
    var ES = ((x1 - x1_old) / x1)
    var data = {
      xl: xl,
      xr: xr,
      x1_old: x1,
      // ES: Math.abs(ES),
      ES: ES,
      fx1: fx1
    }
    return data
  } else {
    return "Cannot"
  }
}

module.exports = { result }