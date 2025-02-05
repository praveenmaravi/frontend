import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/useAuth"; // Custom hook for auth logic
import { useFormValidation } from "../../hooks/useFormValidation"; // Custom hook for form validation
import { authService } from "../../services/authService"; // API service for auth
import LoginForm from "../../components/LoginForm"; // Login form component
import AuthHeader from "../../components/AuthHeader"; // Auth header for branding

const LoginPage = () => {
  const [error, setError] = useState(null); // State for handling login errors
  const { login } = useAuth(); // Destructuring login function from useAuth hook
  const { validateEmail, validatePassword } = useFormValidation(); // Form validation hooks
  const router = useRouter();

  const handleLogin = async (email, password) => {
    // Validate the form fields
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid || !isPasswordValid) {
      setError("Invalid email or password.");
      return;
    }

    try {
      // Call the auth service to handle login API request
      const response = await authService.login(email, password);

      if (response.success) {
        login(response.user); // Call login function from useAuth to store user data
        router.push("/dashboard"); // Redirect user to the dashboard on successful login
      } else {
        setError(response.message); // Set error message if login fails
      }
    } catch (err) {
      setError("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <AuthHeader /> {/* Display the header */}
      <div className="login-form-container">
        <h2 className="text-2xl font-semibold">Log in to your account</h2>
        {error && <p className="text-red-500 mt-2">{error}</p>} {/* Display error message if any */}
        <LoginForm onSubmit={handleLogin} /> {/* Login form component */}
      </div>
    </div>
  );
};

export default LoginPage;
