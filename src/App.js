import './App.css';
import Login from './Auth/Login';
import Footer from './Components/Footer';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const route = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <div>Home</div>
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
