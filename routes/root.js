const express = require('express');
const authHelpers = require('../helpers').AUTH;
const path = require('path');

const router = express.Router();
const ensureAuth = authHelpers.ENSURE_AUTH;


router.get('/login', (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/');
  } else {
    res.sendFile(path.join(`${__dirname}/../templates/login.html`));
  }
});

router.get('/', ensureAuth, (req, res) => {
  res.sendStatus(200);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});

module.exports = router;