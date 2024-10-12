import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [adminId, setAdminId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Hardcoded admin credentials
    const correctId = 'premg513';
    const correctPassword = '20022003';

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if credentials match
        if (adminId === correctId && password === correctPassword) {
            // Save authentication status in localStorage
            localStorage.setItem('isAuthenticated', 'true');
            // Redirect to the dashboard if login is successful
            navigate('/dashboard');
        } else {
            // Set error message if credentials are incorrect
            setError('Invalid ID or password');
        }
    };

    return (
        <div style={styles.container}>
            <h1>Admin Login</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    placeholder="Admin ID"
                    value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={styles.input}
                />
                {error && <p style={styles.error}>{error}</p>}
                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
};

// Inline styles for the login form
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        padding: '20px',
        backgroundColor: 'white',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    input: {
        marginBottom: '10px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ddd',
    },
    button: {
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        marginBottom: '10px',
    },
};

export default AdminLogin;
