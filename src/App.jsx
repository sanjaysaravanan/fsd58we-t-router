import "./App.css";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ParentRoute from "./ParentRoute";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ParentRoute />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/skills"
              element={
                <>
                  <h1>Skills Information Will Appear Here</h1>
                  <Link to="/">Home</Link>
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={<h1>Sorry, No Page Found. Please Check the URL</h1>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
