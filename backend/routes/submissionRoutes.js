const express = require('express');
const router = express.Router();
const { createSubmission, getSubmissions } = require('../controllers/submissionController');

// Route to create a submission
router.post('/', createSubmission);

// Route to get all submissions
router.get('/', getSubmissions);

module.exports = router;
