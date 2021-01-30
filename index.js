const express = require('express')
const app = express()
const port = 3000
const bisection = require('./src/bisection')
const False_Position = require('./src/False-Position')

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
    ans[i].n = i+1
    console.log(ans[i])
  }
  ans[0].n = 1;
  console.log('ans----->', ans[0].xm)
  res.send({ data: ans })
})

app.post('/testfalse', async (req, res) => {
  console.log(req.body.y)
  ans = await False_Position.result(req.body.x, req.body.y)
  console.log("ans --->", ans)
  res.send({ data: ans })

})

console.log("Come la");

app.listen(port, () => {
  console.log(`Node run with port : ${port}`);
})