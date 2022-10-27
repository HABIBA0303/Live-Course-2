const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

const catagory = require('./catagory.json')
app.get('/catagory', (req, res) => {
    res.send(catagory)
})

const course = require('./item.json')
app.get('/course', (req, res) => {
    res.send(course)
})

app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello !')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;