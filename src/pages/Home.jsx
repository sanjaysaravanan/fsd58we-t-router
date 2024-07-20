import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => navigate("/skills")}>Skills</button>
      <Link to="/about">About</Link>&nbsp;
      <a href="/contact">Contact</a>
    </>
  );
};

export default Home;
