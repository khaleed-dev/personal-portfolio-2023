const express = require('express');
const router = express.Router();
const path = require('path')


router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, "../../client/dist/freeLance.html"))
    console.log(__dirname)
    res.send('test')
})

module.exports = router;