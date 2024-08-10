import './App.css';
import ForgotPassword from './Auth/ForgotPassword';
import LoginForm from './Auth/LoginForm';
import RegisterForm from './Auth/RegisterForm';
import Footer from './Components/Footer';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from './Components/layouts/PageNotFound';
// import { ProtectedRoute } from "./Components/ProtectedRoute";
import { AuthProvider } from './hook/useAuth';
import ProtectedRoute from './Components/ProtectedRoute';

const route = createBrowserRouter([
  {
    path: '/login',
    element: <AuthProvider><LoginForm /></AuthProvider>
  },
  {
    path: '/register',
    element: <RegisterForm />
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  },
  {
    path: '/',
    element: <AuthProvider><ProtectedRoute><div>Home</div></ProtectedRoute></AuthProvider>
  },
  {
    path: '*',
    element: <PageNotFound />
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={route} />
      <Footer />
    </div>
  );
}

export default App;
