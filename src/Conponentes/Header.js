import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Simbulo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `hover:text-[#cea664] transition-colors ${
      isActive ? "text-[#cea664] font-medium" : "text-gray-200"
    }`;

  // Função para fechar menu e rolar para o topo
  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="bg-black/60 fixed w-full top-0 z-40 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto drop-shadow-md" />

        <nav className="hidden md:flex space-x-8 font-light tracking-wide">
          <NavLink to="/" className={linkClasses} onClick={handleLinkClick}>
            Home
          </NavLink>
          <NavLink
            to="/quem-somos"
            className={linkClasses}
            onClick={handleLinkClick}
          >
            Quem somos
          </NavLink>
          <NavLink
            to="/servicos"
            className={linkClasses}
            onClick={handleLinkClick}
          >
            Serviços
          </NavLink>
          <NavLink
            to="/contato"
            className={linkClasses}
            onClick={handleLinkClick}
          >
            Contato
          </NavLink>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 hover:text-[#cea664] focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden text-center font-light tracking-wide animate-slide-down rounded-b-xl shadow-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkClasses({ isActive })} block text-lg py-4 px-4 rounded-lg hover:bg-[#cea664]/20 transition-all`
            }
            onClick={handleLinkClick}
          >
            Home
          </NavLink>

          <NavLink
            to="/quem-somos"
            className={({ isActive }) =>
              `${linkClasses({ isActive })} block text-lg py-4  px-4 rounded-lg hover:bg-[#cea664]/20 transition-all`
            }
            onClick={handleLinkClick}
          >
            Quem somos
          </NavLink>

          <NavLink
            to="/servicos"
            className={({ isActive }) =>
              `${linkClasses({ isActive })} block text-lg py-4  px-4 rounded-lg hover:bg-[#cea664]/20 transition-all`
            }
            onClick={handleLinkClick}
          >
            Serviços
          </NavLink>

          <NavLink
            to="/contato"
            className={({ isActive }) =>
              `${linkClasses({ isActive })} block text-lg py-4 mb-10 px-4 rounded-lg hover:bg-[#cea664]/20 transition-all`
            }
            onClick={handleLinkClick}
          >
            Contato
          </NavLink>
        </div>
      )}
    </header>
  );
}
