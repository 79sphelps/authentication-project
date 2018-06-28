'use strict';

const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

const ctrlLanding = require('../controllers/landing');
const ctrlProfile = require('../controllers/profile');
const ctrlAuth = require('../controllers/authentication');

router.get('/landing', auth, ctrlLanding.landingRead);

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
