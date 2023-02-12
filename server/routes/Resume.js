const express = require('express');
const router = express.Router();
const path = require('path')

router.get("/", (req, res) => {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline');
    res.sendFile(path.join(__dirname, "../docs/khaled-cv.pdf"))
})



module.exports = router;