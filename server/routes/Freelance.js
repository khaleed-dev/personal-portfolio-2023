const express = require('express');
const router = express.Router();
const path = require('path')
const fs = require('fs')

router.get('/', (req, res) => {
    let filePath = '/var/task/client/dist/freelance.html';
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (!err) {
        res.sendFile(filePath);
      } else {
        filePath = path.join(__dirname, "../../client/dist/freeLance.html");
        fs.access(filePath, fs.constants.F_OK, (err) => {
          if (!err) {
            res.sendFile(filePath);
          } else {
            res.send("filenotfound");
          }
        });
      }
    });
})

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/dist/freelance.html"));
})

module.exports = router;