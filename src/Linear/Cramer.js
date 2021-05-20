const  math  = require('mathjs')
const localStorage = require('localStorage')
const result = async (val) => {
  // console.log('data ==>', val)
  // console.log('m ==>', val.m)
  // console.log('n ==>', val.n)
  // console.log('z ==>', val.z)
  // console.log('Lenght z ==>', (val.z).length)

  let detF = math.det(val.z)
  console.log('Det Z ==',detF);
  let x = []
  localStorage.setItem('DataArr', JSON.stringify(val.z))
  let temp
  for (let i = 0; i < (val.z).length; i++) {
    temp = JSON.parse(localStorage.getItem('DataArr'))
    // console.log('TEMPPPPP',temp);
    for (let j = 0; j < (val.z).length; j++) {
      temp[j][i] = val.a[j]
    }
    // console.log('Check',temp);
    var ass = parseInt((math.det(temp)).toFixed(0))
    x.push({x:ass/detF})
  }
  console.log(x);
  return x
}


module.exports = { result }
