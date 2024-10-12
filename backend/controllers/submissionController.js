const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../store.json');

// Helper function to read submissions from file
const readSubmissions = () => {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};

// Helper function to write submissions to file
const writeSubmissions = (submissions) => {
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2), 'utf-8');
};

// Controller for creating a new submission
exports.createSubmission = (req, res) => {
    try {
        const { name, socialMediaHandle } = req.body;
        const images = req.files.map(file => file.filename);

        const submissions = readSubmissions();
        const newSubmission = {
            id: submissions.length + 1,
            name,
            socialMediaHandle,
            images,
        };

        submissions.push(newSubmission);
        writeSubmissions(submissions);

        res.status(201).json(newSubmission);
    } catch (error) {
        console.error('Error creating submission:', error);  // Log the error
        res.status(500).json({ message: 'Error creating submission', error });
    }
};

// Controller for fetching all submissions
exports.getSubmissions = (req, res) => {
    try {
        const submissions = readSubmissions();
        res.status(200).json(submissions);
    } catch (error) {
        console.error('Error fetching submissions:', error);  // Log the error
        res.status(500).json({ message: 'Error fetching submissions', error });
    }
};
