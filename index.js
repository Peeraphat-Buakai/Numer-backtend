const express = require('express')
const app = express()
const port = 3000
const bisection = require('./src/bisection')
const False_Position = require('./src/False-Position')
const Graphical = require('./src/Graphical')
const OnePoint = require('./src/One-Point')
const Cramer = require('./src/Cramer')
const GaussE = require('./src/GaussE')

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
  ans[0].num = 1
  res.send({ data: ans })
  // console.log(ans)
})

app.post('/testcramer', async (req, res) => {
  console.log(req.body)
  ans = await Cramer.result(req.body)
  // ans[0].num = 1
  res.send({ data: ans })
  // console.log(ans)
})
GaussE

app.post('/testgaussE', async (req, res) => {
  console.log(req.body)
  ans = await GaussE.result(req.body)
  // ans[0].num = 1
  res.send({ data: ans })
  // console.log(ans)
})


app.listen(port, () => {
  console.log(`Node run with port : ${port}`);
})
