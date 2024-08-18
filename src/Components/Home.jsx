import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div>Home Page</div>
      <Link to="/profile">Profile</Link>
    </>
  );
};

export default Home;
