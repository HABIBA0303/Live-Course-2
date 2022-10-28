const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors());

const catagory = require('./catagory.json')


app.get('/', (req, res) => {
    res.send('Hello !')
})

app.get('/catagory', (req, res) => {
    res.send(catagory)
})

const course = require('./item.json');

app.get('/courses', (req, res) => {
    res.send(course)
})
const courseDetails = require('./courseDetails.json')

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const details = courseDetails.find(n => n.id == id);
    res.send(details)
})
const checkOutItems = require('./checkOutItems.json');

app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const checkOut = checkOutItems.find(n => n.id == id);
    res.send(checkOut)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app;