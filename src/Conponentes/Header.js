import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Simbulo.png";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `hover:text-amber-400 transition-colors ${
      isActive ? "text-amber-400 font-medium" : "text-gray-200"
    }`;

  return (
    <header className="bg-black/60 fixed w-full top-0 z-40 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto drop-shadow-md" />

        <nav className="hidden md:flex space-x-8 font-light tracking-wide">
          <NavLink to="/" className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/quem-somos" className={linkClasses}>
            Quem somos
          </NavLink>
          <NavLink to="/servicos" className={linkClasses}>
            Serviços
          </NavLink>
          <NavLink to="/contato" className={linkClasses}>
            Contato
          </NavLink>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 hover:text-amber-400 focus:outline-none"
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

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-black/90 px-6 py-6 space-y-4 text-gray-200 font-light tracking-wide animate-slide-down">
          <NavLink
            to="/servicos"
            className={linkClasses}
            onClick={() => setIsOpen(false)}
          >
            Serviços
          </NavLink>
          <NavLink
            to="/contato"
            className={linkClasses}
            onClick={() => setIsOpen(false)}
          >
            Contato
          </NavLink>
          <NavLink
            to="/produtos"
            className={linkClasses}
            onClick={() => setIsOpen(false)}
          >
            Produtos
          </NavLink>
        </div>
      )}
    </header>
  );
}
