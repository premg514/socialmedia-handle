import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    // Navigate to the admin login page
    const handleAdminClick = () => {
        navigate('/admin');
    };

    // Navigate to the user submission form
    const handleUserClick = () => {
        navigate('/user');
    };

    return (
        <div style={styles.container}>
            <h1>Welcome! Please Choose Your Role</h1>
            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={handleAdminClick}>Admin</button>
                <button style={styles.button} onClick={handleUserClick}>User</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '300px',
        marginTop: '20px',
    },
    button: {
        padding: '15px 30px',
        fontSize: '18px',
        cursor: 'pointer',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
    },
};

export default LandingPage;
