import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import QuemSomos from "./Quem-somos";
import Contato from "./Contato";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav>
        <Link to="/" className="hover:text-amber-400"></Link>
        <Link to="/quem-somos" className="hover:text-amber-400"></Link>
        <Link to="/contato" className="hover:text-amber-400"></Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
