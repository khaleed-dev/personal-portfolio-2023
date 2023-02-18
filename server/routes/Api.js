// libraries
const fs = require("fs").promises;
const path = require("path");
const express = require("express");
const router = express.Router();
const axios = require("axios");
const NodeCache = require("node-cache");
require('dotenv').config();

// variables
const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 });
const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

router.get("/github", async (req, res) => {
  try {
    const cachedRepos = cache.get("repos");
    if (cachedRepos) {
      res.json(cachedRepos);
    } else {
      const headers = {
        Authorization: `Token ${GITHUB_ACCESS_TOKEN}`,
      };
      // Send a GET request to the GitHub API
      const { data: repos } = await axios.get(
        "https://api.github.com/user/repos",
        { headers }
      );
      const reposWithLanguages = await Promise.all(
        repos.map(async (repo) => {
          const { data: languages } = await axios.get(repo.languages_url, {
            headers,
          });
          return { ...repo, languages };
        })
      );
      // Sort repos by created_at in descending order
      reposWithLanguages.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      cache.set("repos", reposWithLanguages);
      res.json(reposWithLanguages);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Something went wrong" });
  }
});

router.get("/projects", async (req, res) => {
  try {
    // use projects.json to get the projects
    const projectsFile = await fs.readFile("./server/projects.json", "utf-8");
    const projects = JSON.parse(projectsFile);
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Something went wrong" });
  }
});

router.get("/images/:imgName", async (req, res) => {
  try {
    const imageName = req.params.imgName;
    const imagePath = path.join(__dirname, `../images/${imageName}`);
    res.sendFile(imagePath);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Something went wrong" });
  }
});

module.exports = router;
