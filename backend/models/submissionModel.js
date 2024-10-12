const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    name: String,
    socialMediaHandle: String,
    images: [String], // array of image URLs
});

module.exports = mongoose.model('Submission', submissionSchema);
