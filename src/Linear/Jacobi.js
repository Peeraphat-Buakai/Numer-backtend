const { typeOf, abs, re } = require('mathjs');
const math = require('mathjs');
const { flush } = require('nerdamer');
const nerdamer = require("nerdamer/all")
// const simplify = require('mathjs')
const localStorage = require('localStorage')
const result = async (val) => {
  var array=[]
// console.log(val);
  array.push(val.def)
  await iter(val, array)
  // console.log('-------------------------localStorage',JSON.parse(localStorage.getItem('jacobi')));
  // console.log('-------------------------localStorage', JSON.parse(localStorage.getItem('jacobi')).length);
  return 'success'
}

const iter = async(val, arr) =>{
      let y = []
      let check = []
      for (let i = 0; i < (val.x).length; i++) {
        y.push((parseFloat(nerdamer(val.x[i], val.num).evaluate().text()).toFixed(7)))
      }

      arr.push(y)
      // console.log('Array---',arr);
      for (let i = 0; i < (val.x).length; i++) {
        check.push(checkVal(arr[arr.length - 2][i], arr[arr.length - 1][i]))
      }
      const checkloop = check.filter((data) => data === true)
      if (checkloop.length === val.x.length) {
        localStorage.setItem('jacobi', JSON.stringify(arr))
        return 'success'
      } else {
        val.num = assignval(arr[arr.length - 1])
        let Infinity = checkInfinity(val.num, val.x.length)
        if (Infinity) {
          iter(val, arr)
        } else {
          localStorage.setItem('jacobi', JSON.stringify(arr))
          return 'success'
        }
      }
  }

const  checkVal =(arr1,arr2)=>{
  let cout = abs((arr2-arr1)/arr2)
  if (cout > 0.000001) {
    return false
  }else{
    return true
  }

}

const assignval = (arr) =>{
  if (arr.length === 2) {
    var data = {
      a:arr[0],
      b:arr[1]
    }
    return data
  } else if (arr.length === 3) {
    var data = {
      a: parseFloat(arr[0]).toFixed(7),
      b: parseFloat(arr[1]).toFixed(7),
      c: parseFloat(arr[2]).toFixed(7),
    }
    return data
  }else if (arr.length === 4) {
    var data = {
      a: arr[0],
      b: arr[1],
      c: arr[2],
      d:arr[3]
    }
    return data
  }
}

const checkInfinity = (num, count) => {
  if (count === 2) {
    if (num.a !== 'Infinity' && num.b !== 'Infinity') {
       return true
    } else {
      return false
    }
  } else if (count === 3) {
    if (num.a !== 'Infinity' && num.b !== 'Infinity' && num.c !== 'Infinity') {
      return true
    } else {
      return false
    }
  } else if (count === 4) {
    if (num.a !== 'Infinity' && num.b !== 'Infinity' && num.c !== 'Infinity' && num.d !== 'Infinity') {
      return true
    } else {
      return false
    }
  }
}


module.exports = { result }