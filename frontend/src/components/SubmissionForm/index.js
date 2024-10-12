import React, { useState } from 'react';
import axios from 'axios';

function SubmissionForm() {
    const [name, setName] = useState('');
    const [socialMediaHandle, setSocialMediaHandle] = useState('');
    const [images, setImages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('socialMediaHandle', socialMediaHandle);
        images.forEach(image => {
            formData.append('images', image);
        });

        try {
            const res = await axios.post('http://localhost:5000/api/submissions', formData);
            alert('Submission successful!');
        } catch (error) {
            console.error('Error submitting form', error);
        }
    };

    return (
        <div>
            <h1>User Submission Form</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Social Media Handle"
                    value={socialMediaHandle}
                    onChange={(e) => setSocialMediaHandle(e.target.value)}
                    required
                />
                <input
                    type="file"
                    multiple
                    onChange={(e) => setImages([...e.target.files])}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SubmissionForm;
