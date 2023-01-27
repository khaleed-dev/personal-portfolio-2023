const express = require('express');
const path = require('path')
const axios = require('axios');

const app = express()
const PORT = process.env.PORT || 5000
const github_access_token = "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";

app.use(express.json());

// serving portfolio static files
app.use(express.static(path.join(__dirname, "../client/dist")))

// add a route for my resume
app.get("/resume", (req, res) => {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline');
    res.sendFile(path.join(__dirname, "./docs/khaled-cv.pdf"))
})

// route for github api
app.get('/github', async (req, res) => {
    try {
        const headers = {
            headers: {
                "Authorization": "Token " + github_access_token
            }
        }
        // Send a GET request to the GitHub API
        const repos = await axios.get("https://api.github.com/user/repos", headers);

        // get the languages of each repo
        const reposWithLanguages = await Promise.all(repos.data.map(async (repo) => {
            const languages = await axios.get(repo.languages_url, headers);
            repo.languages = languages.data;
            return repo;
        }));
        // Sort repos by created_at in descending order
        reposWithLanguages.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
        });
        res.json(reposWithLanguages);
    } catch (error) {
        res.status(500).send({error});
    }
});

// Create a route for handling 404 errors
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "404.html"))
});

//listen on a port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))