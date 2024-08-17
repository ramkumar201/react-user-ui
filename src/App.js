import './App.css';
import Footer from './Components/Footer';
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes.js";

const route = routes();

function App() {
  return (
    <div className="App">
      <RouterProvider router={route} />
      <Footer />
    </div>
  );
}

export default App;
