import { createBrowserRouter } from "react-router-dom";
import ForgotPassword from './Auth/ForgotPassword';
import LoginForm from './Auth/LoginForm';
import RegisterForm from './Auth/RegisterForm';
import PageNotFound from './Components/layouts/PageNotFound';
import { AuthProvider } from './hook/useAuth';
import ProtectedRoute from './Components/ProtectedRoute';
import Profile from './Components/Profile';
import Home from './Components/Home';

export const routes = () => {
    const route = createBrowserRouter([
        {
            path: '/login',
            element: <AuthProvider><LoginForm /></AuthProvider>
        },
        {
            path: '/register',
            element: <AuthProvider><RegisterForm /></AuthProvider>
        },
        {
            path: '/forgot-password',
            element: <ForgotPassword />
        },
        {
            path: '/',
            element: <AuthProvider><ProtectedRoute><Home /></ProtectedRoute></AuthProvider>
        },
        {
            path: '/profile',
            element: <AuthProvider><ProtectedRoute><Profile /></ProtectedRoute></AuthProvider>
        },
        {
            path: '*',
            element: <PageNotFound />
        }
    ])

    return route;
}