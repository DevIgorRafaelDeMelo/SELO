import "./App.css";
import Hero from "./assets/IMG_2716.jpg";
import {
  FaBalanceScale,
  FaFileInvoiceDollar,
  FaRegBuilding,
} from "react-icons/fa";
import { BsCalculator } from "react-icons/bs";
import grupoFuncionarios from "./assets/IMG_8332.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useState } from "react";

import logo from "./assets/Simbulo.png";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function App() {
  const form = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w9qdez6",
        "template_scwfvel",
        form.current,
        "T7BtuIvfmzu7RWtCO",
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
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <a
        href="https://wa.link/l95yt6"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-300 z-50"
      >
        <FaWhatsapp size={28} />
      </a>
      <header className="bg-black/60 fixed w-full top-0 z-40 shadow-lg backdrop-blur-sm">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-start space-x-2 pb-2">
            <img
              src={logo}
              alt="Logo Minha Empresa"
              className="h-10 w-auto drop-shadow-md"
            />
          </div>
          <nav className="hidden md:flex space-x-8 text-gray-200 font-light tracking-wide">
            <a
              href="#suporte"
              className="hover:text-amber-400 transition-colors"
            >
              Suporte
            </a>
            <a
              href="#servicos"
              className="hover:text-amber-400 transition-colors"
            >
              Serviços
            </a>
            <a
              href="#contato"
              className="hover:text-amber-400 transition-colors"
            >
              Contato
            </a>
            <a
              href="#produtos"
              className="hover:text-amber-400 transition-colors"
            >
              Produtos
            </a>
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
        {isOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-sm px-6 py-6 space-y-4 text-gray-200 font-light tracking-wide animate-slide-down">
            <a
              href="#suporte"
              className="block hover:text-amber-400 transition-colors"
            >
              Suporte
            </a>
            <a
              href="#servicos"
              className="block hover:text-amber-400 transition-colors"
            >
              Serviços
            </a>
            <a
              href="#contato"
              className="block hover:text-amber-400 transition-colors"
            >
              Contato
            </a>
            <a
              href="#produtos"
              className="block hover:text-amber-400 transition-colors"
            >
              Produtos
            </a>
          </div>
        )}
      </header>
      <section className="h-screen grid md:grid-cols-2 text-white relative bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        {/* Overlay com gradiente suave */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        <div className="relative z-10 flex flex-col items-start text-left gap-10 px-8 md:px-20 justify-center h-full animate-fadeIn">
          {/* Título principal */}
          <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight font-sans">
            <span className="text-white">Elo</span>{" "}
            <span className="bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent">
              Contabilidade
            </span>
          </h2>

          {/* Linha divisória elegante */}
          <div className="w-24 h-1 bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] rounded-full"></div>

          {/* Subtítulo sofisticado */}
          <h3 className="text-2xl md:text-3xl text-gray-300 font-serif italic max-w-xl">
            Parceiros estratégicos para o sucesso da sua empresa
          </h3>

          {/* Descrição com destaque */}
          <p className="leading-relaxed text-lg md:text-xl font-light max-w-xl text-gray-400">
            Gestão financeira com{" "}
            <span className="bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent font-semibold">
              transparência
            </span>{" "}
            e{" "}
            <span className="bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent font-semibold">
              inovação
            </span>
            .
            <br />
            <span className="bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent font-medium italic">
              Soluções contábeis para o crescimento do seu negócio.
            </span>
          </p>

          {/* Botão de ação */}
          <div className="mt-6">
            <a
              href="#contato"
              className="px-6 py-3 bg-[#956930] text-black font-semibold rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Fale Conosco
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <img
            src={Hero}
            alt="Tela de telefone"
            className="w-full h-screen object-cover drop-shadow-2xl transform hover:scale-105 transition-transform duration-700 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 via-transparent to-transparent mix-blend-overlay"></div>
        </div>
      </section>
      <section id="servicos" className="py-20 px-[12%] bg-gray-100 space-y-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Serviços
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções contábeis completas e modernas para apoiar o
            crescimento da sua empresa. Combinamos experiência, tecnologia e
            transparência para garantir segurança e eficiência na gestão
            financeira.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-amber-500 inline-block rounded"></span>
              Escrituração Contábil
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Registro e organização de todas as movimentações financeiras da
              sua empresa com precisão e conformidade legal.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-amber-500">✔</span> Lançamentos contábeis
                completos
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-amber-500">✔</span> Demonstrações
                financeiras atualizadas
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-amber-500">✔</span> Conformidade com
                normas fiscais
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-amber-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17v-6h6v6h5v2H4v-2h5zM9 7V5h6v2H9z"
              />
            </svg>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-2.21 0-4 1.79-4 4v6h8v-6c0-2.21-1.79-4-4-4zM6 20h12v2H6z"
              />
            </svg>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-green-600 inline-block rounded"></span>
              Consultoria Fiscal
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Orientação estratégica para reduzir riscos tributários e otimizar
              a carga fiscal da sua empresa.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-600">✔</span> Planejamento
                tributário personalizado
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-600">✔</span> Cumprimento das
                obrigações fiscais
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-600">✔</span> Redução de riscos e
                penalidades
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-blue-600 inline-block rounded"></span>
              Folha de Pagamento
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Administração completa da folha de pagamento, garantindo
              conformidade trabalhista e tranquilidade para sua equipe.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-blue-600">✔</span> Cálculo de salários e
                encargos
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-blue-600">✔</span> Emissão de holerites
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-blue-600">✔</span> Gestão de benefícios e
                obrigações trabalhistas
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16v12H4zM2 18h20M9 22h6"
              />
            </svg>
          </div>
        </div>
      </section>
      <section id="equipe" className="py-20  bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Nossa Equipe
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça o grupo de profissionais que faz a Selo Contabilidade ser
            referência em transparência, inovação e dedicação ao crescimento da
            sua empresa.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={grupoFuncionarios}
            alt="Equipe Selo Contabilidade"
            className="rounded-xl shadow-lg border-4 border-gray-200 max-w-5xl w-full object-cover h-[60vh] transition-transform duration-500"
          />
        </div>
      </section>
      <section
        id="solucoes"
        className="py-20 px-[8%] bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Nossas Soluções
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções contábeis completas e modernas para apoiar o
            crescimento da sua empresa. Combinamos experiência, tecnologia e
            transparência para garantir segurança e eficiência na gestão
            financeira.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-10 border border-gray-200 hover:border-amber-400 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 flex items-center justify-center bg-amber-500 text-white rounded-full mb-6 shadow-lg">
              <BsCalculator size={30} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              Escrituração <br /> Contábil
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-base">
              Registro e organização de todas as movimentações financeiras com
              precisão e conformidade legal.
            </p>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">➤</span> Estruturação
                e organização societária
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">➤</span> Registro em
                órgãos competentes
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">➤</span> Adequação às
                normas legais
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-10 border border-gray-200 hover:border-amber-400 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 flex items-center justify-center bg-amber-500 text-white rounded-full mb-6 shadow-lg">
              <FaBalanceScale size={30} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              Consultoria
              <br /> Fiscal
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-base">
              Estratégias para reduzir riscos tributários e otimizar a carga
              fiscal da sua empresa.
            </p>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">➤</span> Planejamento
                tributário personalizado
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">➤</span> Cumprimento
                das obrigações fiscais
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">➤</span> Redução de
                riscos e penalidades
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-10 border border-gray-200 hover:border-amber-400 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 flex items-center justify-center bg-amber-500 text-white rounded-full mb-6 shadow-lg">
              <FaFileInvoiceDollar size={30} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              Folha de Pagamento
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-base">
              Administração completa da folha de pagamento com conformidade
              trabalhista e tranquilidade para sua equipe.
            </p>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">➤</span> Cálculo de
                salários e encargos
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">➤</span> Emissão de
                holerites
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">➤</span> Gestão de
                benefícios e obrigações
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-10 border border-gray-200 hover:border-amber-400 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 flex items-center justify-center bg-amber-500 text-white rounded-full mb-6 shadow-lg">
              <FaRegBuilding size={30} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              Abertura de Empresas
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-base">
              Apoio completo na abertura e regularização de empresas com
              segurança e agilidade.
            </p>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">➤</span> Orientação
                jurídica e fiscal
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">➤</span> Registro em
                órgãos competentes
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">➤</span> Adequação às
                normas legais
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        id="instagram"
        className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white"
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <FaInstagram className="text-amber-400 text-6xl mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Acompanhe a Selo Contabilidade no Instagram
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Fique por dentro das novidades, dicas de gestão financeira e
            conteúdos exclusivos que vão ajudar sua empresa a crescer com
            transparência e inovação.
          </p>
          <a
            href="https://instagram.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-400 text-black font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-amber-500 transition-colors duration-300"
          >
            Seguir no Instagram
          </a>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl mx-auto">
            Preencha o formulário abaixo e nossa equipe retornará o contato por
            e-mail o mais rápido possível.
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white shadow-lg rounded-lg p-8 space-y-6"
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Nome
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Seu nome"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                E-mail
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="seuemail@exemplo.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Mensagem
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Digite sua mensagem..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-amber-400 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </section>
      <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-12">
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
              className="hover:text-amber-400 transition-colors"
            >
              Serviços
            </a>
            <a
              href="#solucoes"
              className="hover:text-amber-400 transition-colors"
            >
              Soluções
            </a>
            <a
              href="#contato"
              className="hover:text-amber-400 transition-colors"
            >
              Contato
            </a>
          </nav>
          <div className="text-center md:text-left space-y-2">
            <h4 className="text-sm font-semibold text-amber-400 flex items-center gap-2">
              <FaMapMarkerAlt /> Endereço
            </h4>
            <p className="text-gray-400 text-sm">
              Rua Exemplo, 123
              <br />
              Centro – Dois Irmãos/RS
              <br />
              CEP 93950-000
            </p>
          </div>

          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-amber-400 transition-colors"
            >
              <FaFacebookF className="text-white hover:text-black" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-amber-400 transition-colors"
            >
              <FaInstagram className="text-white hover:text-black" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-amber-400 transition-colors"
            >
              <FaLinkedinIn className="text-white hover:text-black" />
            </a>
            <a
              href="https://wa.link/l95yt6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-amber-400 transition-colors"
            >
              <FaWhatsapp className="text-white hover:text-black" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Selo Contabilidade - Todos os
          direitos reservados.
        </div>
      </footer>
    </div>
  );
}
