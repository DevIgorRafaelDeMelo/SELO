import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Header from "./Conponentes/Header";

import { useState } from "react";
import logo from "./assets/Simbulo.png";
import React, { useRef } from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Hero from "./assets/flat-lay-workstation-with-copy-space-stapler.jpg";

export default function Contato() {
  const form = useRef();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section
      id="contato"
      className=" pt-20  bg-gradient-to-r from-black via-gray-900 to-black text-white"
    >
      <a
        href="https://wa.me/5599999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-100 bottom-10 right-4 inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <FaWhatsapp className="w-6 h-6 mr-2" />
        Fale Conosco no WhatsApp
      </a>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="text-center mb-16 pt-20 px-[8%]">
        <h2 className="text-4xl font-extrabold mb-4">
          Entre em{" "}
          <span className="bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent">
            Contato
          </span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Estamos prontos para ajudar sua empresa a crescer com soluções
          modernas e eficientes.
        </p>
      </div>

      {/* Grid com informações e formulário */}
      <div className="grid md:grid-cols-2 gap-12 px-[8%]">
        {/* Informações de contato */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-[#cea664] text-2xl" />
            <div>
              <h4 className="font-bold">Telefone</h4>
              <p className="text-gray-400">(51) 99999-9999</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#cea664] text-2xl" />
            <div>
              <h4 className="font-bold">E-mail</h4>
              <p className="text-gray-400">contato@elo.com.br</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-[#cea664] text-2xl" />
            <div>
              <h4 className="font-bold">Endereço</h4>
              <p className="text-gray-400">
                Rua Mal Floriano Peixoto, 460 - Sala 4 <br />
                Centro - São Sebastião do Caí/RS
              </p>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <form className="bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Nome</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-[#cea664] outline-none"
              placeholder="Seu nome"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">E-mail</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-[#cea664] outline-none"
              placeholder="Seu e-mail"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Mensagem</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-gray-900 text-white focus:ring-2 focus:ring-[#cea664] outline-none"
              placeholder="Escreva sua mensagem..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] text-black font-semibold rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>

      <footer className="text-white py-12 pt-40 px-[8%]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div className="text-center md:text-left space-y-2">
            <img
              src={logo}
              alt="Logo Minha Empresa"
              className="h-10 w-auto drop-shadow-md"
            />
            <p className="text-gray-400 ps-4 text-sm">
              Parceiros estratégicos para o sucesso da sua empresa.
            </p>
          </div>

          <nav className="flex flex-col md:flex-col justify-center items-start gap-3 text-sm font-light">
            <a href="#sobre" className="hover:text-amber-400 transition-colors">
              Sobre
            </a>
            <a
              href="#servicos"
              className="hover:text-[#cea664] transition-colors"
            >
              Serviços
            </a>
            <a
              href="#solucoes"
              className="hover:text-[#cea664] transition-colors"
            >
              Soluções
            </a>
            <a
              href="#contato"
              className="hover:text-[#cea664] transition-colors"
            >
              Contato
            </a>
          </nav>
          <div className="text-center md:text-left space-y-2">
            <h4 className="text-sm font-semibold text-[#cea664] flex items-center gap-2">
              <FaMapMarkerAlt /> Endereço
            </h4>
            <p className="text-gray-400 text-sm">
              R Mal Floriano Peixoto, 460, sala 4
              <br />
              Centro - São Sebastião do Caí
              <br />
              CEP 95760-000
            </p>
          </div>

          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#cea664] transition-colors"
            >
              <FaFacebookF className="text-white hover:text-black" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#cea664] transition-colors"
            >
              <FaInstagram className="text-white hover:text-black" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#cea664] transition-colors"
            >
              <FaLinkedinIn className="text-white hover:text-black" />
            </a>
            <a
              href="https://wa.link/l95yt6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#cea664] transition-colors"
            >
              <FaWhatsapp className="text-white hover:text-black" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Elo Contabilidade - Todos os
          direitos reservados.
        </div>
      </footer>
    </section>
  );
}
