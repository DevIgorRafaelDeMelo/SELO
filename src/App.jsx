import "./App.css";
import Hero from "./assets/hero.jpg";
import AgendaDescktop from "./assets/agenda-desktop.png";
import AgendaMobile from "./assets/agenda-mobile.png";
import Financeiro from "./assets/financiero-descktop.PNG";
import Home from "./assets/Home-descktop.png";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function App() {
  const form = useRef();

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
        (result) => {
          alert("Mensagem enviada com sucesso!");
        },
        (error) => {
          alert("Erro ao enviar mensagem: " + error.text);
        },
      );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-gray-900 fixed w-full top-0 z-40 shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <h1 className="text-xl font-bold tracking-wide">Velon</h1>
          </div>

          <nav className="space-x-6 font-medium text-gray-200">
            <a
              href="#servicos"
              className="hover:text-gray-400 transition-colors"
            >
              Serviços
            </a>
            <a
              href="#portfolio"
              className="hover:text-gray-400 transition-colors"
            >
              Portfólio
            </a>
            <a
              href="https://wa.link/l95yt6"
              target="_blank"
              className="hover:text-gray-400 transition-colors"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>

      <section
        className="h-screen flex items-center justify-center bg-cover bg-center text-white text-center relative"
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 px-6 py-10">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
            Soluções Digitais
          </h2>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-200">
            Transformamos ideias em experiências digitais modernas e eficientes.
          </p>
          <button
            className="mt-8 px-8 py-4 bg-gray-900 text-white font-bold rounded-md 
                     shadow-md hover:bg-gray-700 transition-colors duration-300"
          >
            Conheça nossos serviços
          </button>
        </div>
      </section>

      <section id="servicos" className="py-20 px-[12%] bg-gray-100 space-y-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Serviços
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Nossas soluções digitais foram pensadas para transformar ideias em
            resultados reais. Combinamos inovação, tecnologia e estratégia para
            impulsionar o crescimento da sua empresa e abrir novos caminhos para
            o futuro.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-blue-600 inline-block rounded"></span>
              Desenvolvimento Web
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Criamos sites modernos, responsivos e otimizados para destacar sua
              empresa no ambiente digital.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-blue-600">✔</span> Design responsivo para
                todos os dispositivos
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-blue-600">✔</span> SEO otimizado para
                melhor desempenho em buscas
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-blue-600">✔</span> Integração com sistemas
                e plataformas
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
                d="M4 6h16v10H4zM2 18h20M9 22h6"
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
                d="M3 17l6-6 4 4 8-8"
              />
            </svg>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-green-600 inline-block rounded"></span>
              Consultoria Digital
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Estratégias inteligentes para acelerar sua transformação digital e
              aumentar resultados.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-600">✔</span> Análise de processos e
                oportunidades
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-600">✔</span> Planejamento
                estratégico digital
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <span className="text-green-600">✔</span> Suporte contínuo para
                inovação
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="solucoes" className="py-20 px-[12%] bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Nossas Soluções
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções digitais completas para impulsionar o
            crescimento e a inovação da sua empresa.
          </p>
        </div>

        <div className="space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-600 inline-block rounded"></span>
                Sistema de Gestão de Agenda
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Uma plataforma moderna e personalizada para facilitar o registro
                de clientes e oferecer ao usuário total controle da sua agenda
                de forma prática e intuitiva.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-700">
                  Registro rápido e simplificado para clientes
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  Controle de agenda fácil e visual
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  Personalização de horários e notificações
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  Interface moderna e responsiva
                </li>
              </ul>
            </div>
            <div className="relative flex justify-center items-end gap-6 p-20">
              <img
                src={AgendaMobile}
                alt="Visualização Mobile"
                className="w-14 h-28 rounded-2xl border-4 border-gray-300 shadow-lg transform transition-transform duration-300 hover:scale-110 z-30 object-cover"
              />

              <img
                src={AgendaDescktop}
                alt="Visualização Desktop"
                className="w-[52rem] h-[12rem] rounded-xl border-4 border-gray-300 shadow-md transform transition-transform duration-300 hover:scale-110 z-10 hover:z-50 object-cover -ml-6"
              />

              <img
                src={AgendaDescktop}
                alt="Visualização Tablet"
                className="w-54 h-[8rem] rounded-xl border-4 border-gray-300 shadow-lg transform transition-transform duration-300 hover:scale-110 -ml-24 z-20 object-cover"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative flex justify-center items-end gap-6 p-20">
              <img
                src={Financeiro}
                alt="Visualização Desktop"
                className="w-[52rem] h-[12rem] rounded-xl border-4 border-gray-300 shadow-md transform transition-transform duration-300 hover:scale-110 z-10 hover:z-50 object-cover -ml-6"
              />
            </div>

            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                Sistema Financeiro
                <span className="w-2 h-8 bg-green-600 inline-block rounded"></span>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Uma solução completa para gestão financeira, oferecendo controle
                seguro, relatórios detalhados e interface moderna para facilitar
                a tomada de decisões.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  Controle de contas a pagar e receber
                </li>
                <li className="flex items-center gap-2">
                  Relatórios financeiros personalizados
                </li>
                <li className="flex items-center gap-2">
                  Dashboard intuitivo e responsivo
                </li>
                <li className="flex items-center gap-2">
                  Segurança e confiabilidade nos dados
                </li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-600 inline-block rounded"></span>
                Soluções em Negócios Digitais
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Potencialize sua presença online com uma plataforma moderna e
                personalizada. Oferecemos ferramentas digitais que conectam sua
                empresa ao futuro, garantindo eficiência, inovação e resultados
                reais.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-700">
                  Estratégias digitais sob medida
                </li>

                <li className="flex items-center gap-2 text-gray-700">
                  Automação para aumentar produtividade
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  Interface moderna e responsiva
                </li>
              </ul>
            </div>

            <div className="relative flex justify-center items-end gap-6 p-20">
              <img
                src={Home}
                alt="Visualização Desktop"
                className="w-[52rem] h-[12rem] rounded-xl border-4 border-gray-300 shadow-md transform transition-transform duration-300 hover:scale-110 z-10 hover:z-50 object-cover -ml-6"
              />
            </div>
          </div>
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
                className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">Velon</h3>
            <p className="text-gray-400 text-sm">Soluções Digitais</p>
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#sobre" className="hover:text-yellow-400 transition">
              Sobre
            </a>
            <a href="#servicos" className="hover:text-yellow-400 transition">
              Serviços
            </a>
            <a
              href="https://wa.link/l95yt6"
              target="_blank"
              className="hover:text-yellow-400 transition"
            >
              Contato
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Velon - Todos os direitos
          reservados.
        </div>
      </footer>
    </div>
  );
}
