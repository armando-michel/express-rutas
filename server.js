const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Buen dia! Armando Michel')
})

app.get('/nando', (req, res) => {
  res.send('Buen noches nandito')
})

app.get('/monica', (req, res) => {
  res.send('Buen noches monica')
})

app.get('/lucas', (req, res) => {
  res.send('Buen noches Lucas')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})