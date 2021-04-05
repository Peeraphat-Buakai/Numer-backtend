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
    let x
    // console.log('x befor',x)
    for (let index3 = 0; index3 < (val.z).length; index3++) {
      console.log('Index3 ==', index3)
      x = val.z
      console.log('x -->', x)
      for (let index = 0; index < (val.z).length; index++) {
        for (let index2 = 0; index2 < (val.z).length; index2++) {
          if (index2 === 0 && index3===0) {
            x[index][index2] = val.a[index]
          }
          else if (index2 === 1 && index3 === 1) {
            x[index][index2] = val.a[index]
          }
          else if (index2 === 2 && index3 === 2) {
            x[index][index2] = val.a[index]
          }
        }
      }
      
      console.log(x)
      // x= val.z
    }

   
  }else{
    console.log("Error");
  }
}


module.exports = { result }
