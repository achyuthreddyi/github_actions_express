const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.get('/api', (req, res) => {
  res.json({ msg: 'Hello', status: 201 })
})
app.get('/api/hello', (req, res) => {
  res.json({ msg: 'Hello', status: 200 })
})
app.listen(5000, () => {
  console.log('running ar port 5000')
})
