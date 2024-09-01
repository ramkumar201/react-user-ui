import './App.css';
import Footer from './Components/Footer';
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes.js";
import { ToastContainer } from "react-toastify";

const route = routes();

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <RouterProvider router={route} />
      <Footer />
    </div>
  );
}

export default App;
