const nerdamer = require("nerdamer/all")
const result = async (val) => {
  console.log(val);
  var arr = []
  var num = 0

  console.log('Val.X.X ==',val.x.x);
  
  send1 = await cal1(val, num)
  arr.push(send1)
  console.log('Array =',arr);
  send2 = await cal2(val, num)
}



const cal1 = (val, num) => {
  console.log('Val.x ==',val.x);
  console.log("IN");
  var Xi = (nerdamer(val.Equation, val.x).evaluate()).text();
  num++
  data = {
    num: num,
    x: Xi,
    Es: ""
  }
  return data
}

const cal2 = (val, num) => {
  console.log('2----->',val);
  var Xi = (nerdamer(val.Equation, val.x).evaluate()).text();
  num++
  console.log('Xi----->',Xi);
  Es = ((Xi - val.x) / Xi).toFixed(7)
  console.log(num, Xi, Es)
  data = {
    num: num,
    x: Xi,
    Es: Math.abs(Es).toFixed(7)
  }
  return data
}

module.exports = { result }
