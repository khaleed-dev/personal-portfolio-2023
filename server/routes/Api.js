// libraries
const express = require('express');
const router = express.Router();
const axios = require('axios');

// variables
const github_access_token = "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";


router.get("/github", async (req, res) => {
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
})

module.exports = router;