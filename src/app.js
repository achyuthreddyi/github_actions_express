const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({ msg: 'Hello' })
})
app.get('/hello', (req, res) => {
  res.json({ msg: 'Hello' })
})
app.listen(5000, () => {
  console.log('running ar port 5000')
})
