import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/skills">Skills</Link>&nbsp;
      <Link to="/about">About</Link>&nbsp;
      <a href="/contact">Contact</a>
    </>
  );
};

export default Home;
