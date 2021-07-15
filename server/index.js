const express = require('express')
const app = express()
const path = require('path')

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'../index.html'))
})

const port = proces.env.PORT || 4005

app.listen(port,() => {
    console.log('Server listening on 4005')
})