import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Aliens from "../pages/Aliens";
import Allies from "../pages/Allies";
import Villains from "../pages/Villains";
import Transformations from "../pages/Transformations";
import Encyclopedia
from "../components/encyclopedia/Encyclopedia";
import Universe from "../pages/Universe";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aliens" element={<Aliens />} />
        <Route path="/allies" element={<Allies />} />
        <Route path="/villains" element={<Villains />} />
        <Route path="/transformations" element={<Transformations />} />
        <Route path="/encyclopedia" element={<Encyclopedia />} />
        <Route path="/universe" element={<Universe />} />
      </Routes>
    </BrowserRouter>
  );
}