const result = async (val) => {
  console.log('data ==>', val)
  console.log('m ==>', val.m)
  console.log('n ==>', val.n)
  console.log('z ==>', val.z)
  console.log('Lenght z ==>', (val.z).length)

  if (val.n === (val.z).length ){
    console.log("come");
    const c = [[2, 0], [-1, 3]] 
    console.log(math.det(c) );
  }else{
    console.log("Error");
  }
}


module.exports = { result }
