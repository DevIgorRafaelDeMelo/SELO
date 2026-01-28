import { Routes, Route  } from "react-router-dom";
import Home from "./Home";
import QuemSomos from "./Quem-somos";
import Contato from "./Contato";
import Servicos from "./Servicos";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/servicos" element={<Servicos />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
