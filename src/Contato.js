import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Header from "./Conponentes/Header";
import { useState } from "react";
import logo from "./assets/Simbulo.png";
import React, { useRef } from "react";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contato() {
  const form = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oy8n6y5",
        "template_hqia079",
        form.current,
        "3ZNn1Wm8YtupNsSu0",
      )
      .then(
        () => {
          alert("Mensagem enviada com sucesso!");
        },
        (error) => {
          alert("Erro ao enviar mensagem: " + error.text);
        },
      );
  };
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

      <div className="grid md:grid-cols-2 gap-12 px-[8%]">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-[#cea664] text-2xl" />
            <div>
              <h4 className="font-bold">Telefone</h4>
              <p className="text-gray-400">(51) 99977-7981</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-[#cea664] text-2xl" />
            <div>
              <h4 className="font-bold">E-mail</h4>
              <p className="text-gray-400">contabilelogerencia@gmail.com</p>
              <p className="text-gray-400">elocontabilfinanceiro@gmail.com </p>
              <p className="text-gray-400">elocontabilcont1@gmail.com</p>
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

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-800 shadow-lg rounded-lg p-8 space-y-6"
        >
          <div>
            <label className="block text-gray-300 font-semibold mb-2">
              Nome
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Seu nome"
              className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#cea664]"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">
              E-mail
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="seuemail@exemplo.com"
              className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#cea664]"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">
              Mensagem
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Digite sua mensagem..."
              className="w-full border border-gray-600 rounded-lg px-4 py-2 bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#cea664]"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:opacity-90 transition duration-300"
            >
              Enviar Mensagem
            </button>
          </div>
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
              href="https://www.instagram.com/elosolucoesempresariais?igsh=Y3h4N25taWx0dzZi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[#cea664] transition-colors"
            >
              <FaInstagram className="text-white hover:text-black" />
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
