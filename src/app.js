const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({ msg: 'Hello', status: 201 })
})
app.get('/hello', (req, res) => {
  res.json({ msg: 'Hello', status: 200 })
})
app.listen(5000, () => {
  console.log('running ar port 5000')
})
