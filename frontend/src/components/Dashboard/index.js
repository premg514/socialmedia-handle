import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
    const [submissions, setSubmissions] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/submissions');
                setSubmissions(res.data);
            } catch (error) {
                console.error('Error fetching submissions', error);
            }
        };

        fetchSubmissions();
    }, []);

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');  // Clear the login state
        navigate('/admin');  // Redirect to the login page
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>  {/* Logout button */}
            {submissions.map(submission => (
                <div key={submission.id}>
                    <h2>{submission.name}</h2>
                    <p>{submission.socialMediaHandle}</p>
                    <div>
                        {submission.images.map(image => (
                            <img
                                key={image}
                                src={`http://localhost:5000/uploads/${image}`}
                                alt="submission"
                                style={{ width: '100px', height: '100px' }}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Dashboard;
