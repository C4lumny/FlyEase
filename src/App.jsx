import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Flights }  from "./pages/Flights";
import { About } from "./pages/About";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Vuelos" element={<Flights />}/>
      <Route path="/About" element={<About />}/>
      <Route path="*" element={<h1 className="m-10 text-3xl">404 not found</h1>}/>
    </Routes>
  );
}
