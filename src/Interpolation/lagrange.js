const result = async (val) => {
  console.log(val)
  let assige = 0

  for (let i = 0; i < (val.x).length; i++) {
    let p = 1
    for (let j = 0; j < (val.x).length; j++) {
      if (i != j) {
        p = p * (val.z - val.x[j]) / (val.x[i] - val.x[j])
      }
    }
    assige = assige + p * val.y[i]
  }

  console.log('assige------',assige);
  let array=[]
  // arr.push({ x: send })
  array.push({value:assige})
  return array
}

module.exports = { result }