const  math  = require('mathjs')
const result = async (val) => {
  console.log('data ==>', val)
  console.log('m ==>', val.m)
  console.log('n ==>', val.n)
  console.log('z ==>', val.z)
  console.log('Lenght z ==>', (val.z).length)

  if (val.n === (val.z).length ){
    console.log("come");
    const assDat = val.z
    console.log('assDet ==', assDat)
    var check = math.det(assDat)
    console.log('Det ==', check)
  }else{
    console.log("Error");
  }
}


module.exports = { result }
