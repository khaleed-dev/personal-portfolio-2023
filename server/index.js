// installing the required libraries
const express = require('express');
const path = require('path')


// routes variables
const freelanceRoute = require('./routes/Freelance')
const resumeRoute = require('./routes/Resume')
const apiRoute = require('./routes/Api')

// variables
const app = express()
const PORT = process.env.PORT || 5000


// express middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")))

// routes
app.use("/freelance", freelanceRoute)
app.use("/resume", resumeRoute)
app.use('/api', apiRoute)


// Create a route for handling 404 errors
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "404.html"))
});

//listen on a port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))