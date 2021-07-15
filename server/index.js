const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(__dirname + '../styles.css')

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'../index.html'))
})

const port = process.env.PORT || 4005

app.listen(port,() => {
    console.log('Server listening on 4005')
})