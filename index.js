const express = require('express')
const app = express()
const port = 3000
const bisection = require('./src/Root/bisection')
const False_Position = require('./src/Root/False-Position')
const Graphical = require('./src/Root/Graphical')
const OnePoint = require('./src/Root/One-Point')
const OnePoint2 = require('./src/Root/One-Point2')
const Cramer = require('./src/Linear/Cramer')
const GaussE = require('./src/Linear/GaussE')
const GaussJ = require('./src/Linear/GaussJ')
const LU = require('./src/Linear/Lu_Method')
const Cholesky = require('./src/Linear/cholesky')
const Jacobi = require('./src/Linear/Jacobi')
const Newtons = require('./src/Interpolation/newton')
const NewtonRaphson = require('./src/Root/Newton-Raphson')





const localStorage = require('localStorage')
const  math  = require('mathjs')

const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/test', (req, res) => {
  console.log(bisection.result);
  res.send(bisection.result)
})

app.post('/testpost', async (req, res) => {
  console.log(req.body)
  ans = await bisection.result(req.body.x, req.body.y)
  console.log('ans----->', ans.length)
  ans[0].xm = ans[0].xm_first
  ans[0].xl_new = ""
  ans[0].xr_new = ""
  for (let i = 0; i < ans.length; i++) {
    ans[i].n = i + 1
    console.log(ans[i])
  }
  ans[0].n = 1;
  console.log('ans----->', ans[0].xm)
  res.send({ data: ans })
})

app.post('/testfalse', async (req, res) => {
  console.log(req.body.y)
  ans = await False_Position.result(req.body.x, req.body.y)
  // console.log("ans --->", ans)
  console.log('ans----->', ans.length)
  ans[0].x1 = ans[0].x1_first
  ans[0].xl_new = ""
  ans[0].xr_new = ""
  for (let i = 0; i < ans.length; i++) {
    ans[i].n = i + 1
    console.log(ans[i])
  }
  ans[0].n = 1;
  console.log('ans----->', ans[0].x1)
  res.send({ data: ans })
})

app.post('/testgraphical', async (req, res) => {
  console.log(req.body)
  ans = await Graphical.result(req.body.x, req.body.y)
  // console.log('ans----->', ans.length)
  res.send({ data: ans })
})

app.post('/testonepoint', async (req, res) => {
  console.log(req.body)
  ans = await OnePoint.result(req.body.x)
  // ans[0].num = 1
  // console.log(ans);
  res.send({ data: ans })
  // console.log(ans)
})

app.post('/testonepoint2', async (req, res) => {
  // console.log(req.body)
  ans = await OnePoint2.result(req.body)
  // ans[0].num = 1
  res.send({ data: ans })
  // console.log(ans)
})

app.post('/testcramer', async (req, res) => {
  console.log(req.body)
  ans = await Cramer.result(req.body)
  // ans[0].num = 1
  res.send({ data: ans ,
  status:"success"})
  // console.log(ans)
})
GaussE

app.post('/testgaussE', async (req, res) => {
  console.log(req.body)
  ans = await GaussE.result(req.body)
  res.send({ data: ans })
  // console.log(ans)
})

app.post('/testgaussJ', async (req, res) => {
  console.log(req.body)
  ans = await GaussJ.result(req.body)
  res.send({ data: ans })
  // console.log(ans)
})

app.post('/testLU', async (req, res) => {
  // console.log(req.body)
  ans = await LU.result(req.body)
  res.send({ data: ans })
  // console.log(ans)
})

app.post('/testCholesky', async (req, res) => {
  // console.log(req.body)
  ans = await Cholesky.result(req.body)
  res.send({ data: ans })
  // console.log(ans)
})

app.post('/testJacobi', async (req, res) => {
  // console.log(req.body)
  ans = await Jacobi.result(req.body)
  res.send({ data: JSON.parse(localStorage.getItem('jacobi'))})
  
})

app.post('/testNewtons', async (req, res) => {
  // console.log(req.body)
  ans = await Newtons.result(req.body)
  res.send({ data: ans })
})

app.post('/testNewtonRaphson', async (req, res) => {
  // console.log(req.body)
  ans = await NewtonRaphson.result(req.body)
  res.send({ data: ans })
})



app.listen(port, () => {
  console.log(`Node run with port : ${port}`);
})
