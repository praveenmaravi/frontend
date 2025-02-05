// src/router/guards/ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import authGuard from './authGuard';

const ProtectedRoute = ({ children }) => {
  return authGuard() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
