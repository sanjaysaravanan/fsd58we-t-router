import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ParentRoute = () => {
  const [activeRoute, setActiveRoute] = useState("home");

  return (
    <div>
      <div>
        <Link to="/">
          <button
            style={{
              backgroundColor: activeRoute === "home" ? "lightblue" : "initial",
            }}
            onClick={() => setActiveRoute("home")}
          >
            Home
          </button>
        </Link>
        <Link to="/skills">
          <button
            style={{
              backgroundColor:
                activeRoute === "skills" ? "lightblue" : "initial",
            }}
            onClick={() => setActiveRoute("skills")}
          >
            Skills
          </button>
        </Link>
        <Link to="/about">
          <button
            style={{
              backgroundColor:
                activeRoute === "about" ? "lightblue" : "initial",
            }}
            onClick={() => setActiveRoute("about")}
          >
            About
          </button>
        </Link>
        <Link to="/contact">
          <button
            style={{
              backgroundColor:
                activeRoute === "contact" ? "lightblue" : "initial",
            }}
            onClick={() => setActiveRoute("contact")}
          >
            Contact
          </button>
        </Link>
      </div>
      {/* Below tags allows the child route to be rendered if they match the url */}
      <Outlet />
    </div>
  );
};

export default ParentRoute;
