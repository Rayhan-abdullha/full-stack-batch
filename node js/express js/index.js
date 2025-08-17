const express = require('express')
const middleWare = require('./middleware/middleware')

const app = express()

app.get('/', middleWare, (req, res) => {
    res.status(200).json({
        msg: 'Hello express'
    })
})
const port = 4000
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})