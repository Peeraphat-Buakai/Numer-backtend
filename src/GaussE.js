const result = async (val)=>{
  console.log(val.z);

  for (let i = 1; i < (val.z).length; i++) {
    for (let j = 0; j < (val.z).length; j++) {
      if(val.z[0][1] !== 0){
        // console.log(val.z[i][j]);
        var temp
        for (let k = 0; k < (val.z).length; k++) {
          temp = ((val.z[0][k])/val.z[0][1])*val.z[0][1]
        }
        console.log('TEMP-----',temp);
      }
    }
  }

}

module.exports = { result }