const result = async (val)=>{
  console.log(val.z);

  let arr = [[0.12, 0.18, -0.17, 5.5],  
           [0.06, 0.09, 0.15, -1.95],  
           [0.22, -0.1, 0.06, 0.5]]
let res = gauss(arr)
console.log(res)

}

module.exports = { result }