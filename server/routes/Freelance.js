const express = require('express');
const router = express.Router();
const path = require('path')
const fs = require('fs')


const mypath = path.join(__dirname, "../../client")
const mypath2 = path.join(__dirname, "../../client/dist")

router.get('/', (req, res) => {
    fs.readdir(mypath, (err, files) => {
        if(err){
            console.log(err)
        } else {
            files.forEach(file => {
                console.log(file)
            })
        }
    })
    console.log('path2')
    fs.readdir(mypath2, (err, files) => {
        if(err){
            console.log(err)
        } else {
            files.forEach(file => {
                console.log(file)
            })
        }
    })
    res.sendFile(path.join(__dirname, "../../client/dist/freeLance.html"))
})

module.exports = router;