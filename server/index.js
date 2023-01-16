const express = require('express');
const path = require('path')

const PORT = process.env.PORT || 5000
const app = express()

// serving portfolio static files
app.use(express.static(path.join(__dirname, "../client/dist")))

// add a route for my resume
app.get("/resume", (req, res) => {
    res.sendFile(path.join(__dirname, "./docs/khaled-cv.pdf"))
})


//listen on a port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))