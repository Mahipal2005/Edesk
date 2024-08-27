import Home from "../componet/Home";
import { Course } from "../componet/Course";
import { Fees } from "../componet/Fees";
import { Adout } from "../componet/Adout";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <div className="Navbar">
        <Link to="/">Home</Link>
        <Link to="/Adout">Adout</Link>
        <Link to="/Fees">Fees</Link>
        <Link to="/Course">Course</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Adout" element={<Adout />} />
        <Route path="/Course" element={<Course />} />
        <Route path="/Fees" element={<Fees />} />
      </Routes>
    </>
  );
}
