import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubmissionForm from './components/SubmissionForm';
import Dashboard from './components/Dashboard';
import AdminLogin from './components/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';  // For guarding routes
import LandingPage from './components/LandingPage';  // The new landing page

function App() {
    return (
        <Router>
            <Routes>
                {/* Landing page where user selects Admin or User */}
                <Route path="/" element={<LandingPage />} />
                {/* User routes */}
                <Route path="/user" element={<SubmissionForm />} />
                {/* Admin login */}
                <Route path="/admin" element={<AdminLogin />} />
                {/* Protect the dashboard route */}
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            </Routes>
        </Router>
    );
}

export default App;
