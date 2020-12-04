const express = require('express')
const port = 3001
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    console.log('+1')
    res.send("xlinc's server")
})

app.post('/adduser', (req, res) => {
    console.log('Adding user')
    console.log(req)

    res.send({ updated: true })
})

app.listen(port, (req, res) => {
    console.log('Server running on port : ', port)
})
