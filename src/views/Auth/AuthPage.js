// src/views/Auth/AuthPage.js

import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';
import ResetPasswordForm from './components/ResetPasswordForm';
import AuthHeader from './components/AuthHeader';

const AuthPage = () => {
    const [authMode, setAuthMode] = useState('login'); // 'login', 'signup', 'forgot', or 'reset'

    // Function to toggle between login and signup
    const toggleAuthMode = (mode) => {
        setAuthMode(mode);
    };

    const renderAuthForm = () => {
        switch (authMode) {
            case 'login':
                return <LoginForm />;
            case 'signup':
                return <SignupForm />;
            case 'forgot':
                return <ForgotPasswordForm />;
            case 'reset':
                return <ResetPasswordForm />;
            default:
                return <LoginForm />;
        }
    };

    return (
        <div className="auth-page">
            <AuthHeader />
            <div className="auth-form-container">
                {renderAuthForm()}
            </div>
            <div className="auth-footer">
                {authMode === 'login' ? (
                    <p>
                        Don't have an account?{' '}
                        <button onClick={() => toggleAuthMode('signup')} className="auth-toggle-btn">
                            Sign up
                        </button>
                    </p>
                ) : authMode === 'signup' ? (
                    <p>
                        Already have an account?{' '}
                        <button onClick={() => toggleAuthMode('login')} className="auth-toggle-btn">
                            Log in
                        </button>
                    </p>
                ) : authMode === 'forgot' ? (
                    <p>
                        Remember your password?{' '}
                        <button onClick={() => toggleAuthMode('login')} className="auth-toggle-btn">
                            Log in
                        </button>
                    </p>
                ) : (
                    <p>
                        Want to go back?{' '}
                        <button onClick={() => toggleAuthMode('login')} className="auth-toggle-btn">
                            Log in
                        </button>
                    </p>
                )}
            </div>
        </div>
    );
};

export default AuthPage;
