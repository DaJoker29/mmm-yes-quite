const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/login', (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/');
  } else {
    res.sendFile(path.join(`${__dirname}/../templates/login.html`));
  }
});

router.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../client/index.html`));
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;