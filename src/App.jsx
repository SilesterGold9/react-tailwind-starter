import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Pricing from "./pages/Pricing.jsx";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>

      <footer className="p-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} My Project. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
