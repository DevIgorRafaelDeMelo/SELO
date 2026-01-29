import "./App.css";
import Hero from "./assets/top-view-workspace-with-notepad-copy-space.jpg";
import { FaBook, FaUsersCog } from "react-icons/fa";
import {
  FaRegLightbulb,
  FaUsers,
  FaBalanceScale,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";
import grupoFuncionarios from "./assets/IMG_8332.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaChartLine,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import { useState } from "react";
import logo from "./assets/Simbulo.png";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Header from "./Conponentes/Header";

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
        href="https://wa.me/5599999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-100 bottom-10 right-4 inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <FaWhatsapp className="w-6 h-6 mr-2" />
        Fale Conosco no WhatsApp
      </a>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      <section className="h-screen grid md:grid-cols-1 text-white relative bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        <img
          src={Hero}
          alt="Background empresarial"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        <div className="relative z-10 flex flex-col items-start text-left gap-8 px-4 sm:px-8 md:px-20 justify-center min-h-screen animate-fadeIn">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight font-sans">
            <span className="text-white">Elo</span>{" "}
            <span className="bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent">
              Soluções empresariais
            </span>
          </h2>

          <div className="w-20 sm:w-24 h-1 bg-[#956930] rounded-full"></div>

          <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-serif italic max-w-xl">
            Inovação que conecta resultados
          </h3>

          <p className="leading-relaxed text-base sm:text-lg md:text-xl font-light max-w-xl text-gray-400">
            Gestão contabil e financeira com{" "}
            <span className="bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent font-semibold">
              transparência
            </span>{" "}
            e{" "}
            <span className="bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent font-semibold">
              inovação
            </span>
            .{" "}
            <span className="bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent font-medium italic">
              Parceiros estratégicos para o sucesso da sua empresa
            </span>
          </p>

          <div className="mt-6">
            <a
              href="#contato"
              className="px-5 sm:px-6 py-3 bg-[#956930] text-black font-semibold rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </section>

      <section
        id="servicos"
        className="py-16 px-[10%] bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white space-y-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-3 bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent">
            Serviços
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Soluções contábeis modernas para apoiar o crescimento da sua empresa
            com experiência, tecnologia e transparência.
          </p>
        </div>

        {/* Estruturação e Regularização de Empresas */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 justify-center">
              <span className="w-2 h-6 bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] inline-block rounded"></span>
              Estruturação e Regularização de Empresas
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Análise e enquadramento societário e tributário;</li>
              <li>Estruturação de Holdings e Offshores;</li>
              <li>
                Registro em órgãos competentes (Junta, Receita, Prefeitura
                etc.).
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <FaBook className="h-16 w-16 text-[#cea664]" />
          </div>
        </div>

        {/* Contabilidade Gerencial e Fiscal */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <FaBalanceScale className="h-16 w-16 text-[#cea664]" />
          </div>
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 justify-center">
              <span className="w-2 h-6 bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] inline-block rounded"></span>
              Contabilidade Gerencial e Fiscal
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Escrituração contábil e fiscal;</li>
              <li>Apuração e envio de tributos;</li>
              <li>Relatórios e demonstrativos gerenciais;</li>
              <li>Acompanhamento de indicadores de desempenho;</li>
              <li>Atendimento consultivo e personalizado.</li>
            </ul>
          </div>
        </div>

        {/* Soluções para Folha de Pagamento */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 justify-center">
              <span className="w-2 h-6 bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] inline-block rounded"></span>
              Soluções para Folha de Pagamento
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Cálculo da folha de salários;</li>
              <li>
                Emissão de guias trabalhistas (e-Social, FGTS, INSS etc.);
              </li>
              <li>Gestão de férias, 13º salário e rescisões;</li>
              <li>Suporte completo na rotina trabalhista empresarial.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <FaUsersCog className="h-16 w-16 text-[#cea664]" />
          </div>
        </div>

        {/* Consultoria Empresarial */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <FaChartLine className="h-16 w-16 text-[#cea664]" />
          </div>
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 justify-center">
              <span className="w-2 h-6 bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] inline-block rounded"></span>
              Consultoria Empresarial
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Diagnóstico financeiro e organizacional;</li>
              <li>Estruturação de processos e rotinas;</li>
              <li>Apoio ao planejamento estratégico;</li>
              <li>Identificação de melhorias e redução de custos;</li>
              <li>Acompanhamento na implementação de mudanças.</li>
            </ul>
          </div>
        </div>

        {/* Respaldo Tributário para Pessoas Físicas */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 justify-center">
              <span className="w-2 h-6 bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] inline-block rounded"></span>
              Respaldo Tributário para Pessoas Físicas
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Apuração de ganhos com criptoativos;</li>
              <li>
                Suporte tributário para investimentos no Brasil e no exterior;
              </li>
              <li>Apuração de GCAP, Carnê-Leão, IRPF;</li>
              <li>
                Orientação para regularidade fiscal e prevenção de autuações.
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <FaFileInvoiceDollar className="h-16 w-16 text-[#cea664]" />
          </div>
        </div>
      </section>

      <section
        id="apresentacao"
        className="py-20 px-20 bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            Por que escolher a{" "}
            <span className="bg-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent">
              Elo
            </span>
            ?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conheça os diferenciais que tornam nossa parceria estratégica para o
            sucesso da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-5 lg:grid-cols-5  gap-10">
          <div className="bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] text-black rounded-xl shadow-lg p-8 flex flex-col items-start text-left">
            <FaRegLightbulb size={32} className="mb-4 text-black" />
            <h3 className="text-lg font-bold mb-2">Soluções Personalizadas</h3>
            <p className="text-sm">
              Soluções sob medida que geram valor duradouro para o seu negócio.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] text-black rounded-xl shadow-lg p-8 flex flex-col items-start text-left">
            <FaUsers size={32} className="mb-4 text-black" />
            <h3 className="text-lg font-bold mb-2">
              Profissionais Experientes
            </h3>
            <p className="text-sm">
              Equipe qualificada e em constante atualização para atender suas
              demandas.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] text-black rounded-xl shadow-lg p-8 flex flex-col items-start text-left">
            <FaBalanceScale size={32} className="mb-4 text-black" />
            <h3 className="text-lg font-bold mb-2">Eficiência Operacional</h3>
            <p className="text-sm">
              Foco na redução de custos e otimização tributária para sua
              empresa.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] text-black rounded-xl shadow-lg p-8 flex flex-col items-start text-left">
            <FaShieldAlt size={32} className="mb-4 text-black" />
            <h3 className="text-lg font-bold mb-2">Integridade</h3>
            <p className="text-sm">
              Condução de todas as etapas com ética e transparência.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] text-black rounded-xl shadow-lg p-8 flex flex-col items-start text-left">
            <FaRocket size={32} className="mb-4 text-black" />
            <h3 className="text-lg font-bold mb-2">Respostas Rápidas</h3>
            <p className="text-sm">
              Agilidade e soluções eficazes para suas necessidades empresariais.
            </p>
          </div>
        </div>
      </section>

      <section
        id="equipe"
        className="pt-20 bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent">
            Nossa Equipe
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Conheça o grupo de profissionais que faz a Selo Contabilidade ser
            referência em transparência, inovação e dedicação ao crescimento da
            sua empresa.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={grupoFuncionarios}
            alt="Equipe Selo Contabilidade"
            className="shadow-lg w-full object-cover   transition-transform duration-500
                 h-auto md:h-[80vh]"
          />
        </div>
      </section>

      <section
        id="instagram"
        className="py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white"
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <FaInstagram className="text-[#cea664] text-6xl mx-auto mb-6" />

          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent">
            Acompanhe a Elo no Instagram
          </h2>

          <p className="max-w-2xl mx-auto mb-8 bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent">
            Fique por dentro das novidades, dicas de gestão financeira e
            conteúdos exclusivos que vão ajudar sua empresa a crescer com
            transparência e inovação.
          </p>

          <a
            href="https://instagram.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] text-black font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-amber-500 transition-colors duration-300"
          >
            Seguir no Instagram
          </a>
        </div>
      </section>

      <section
        id="parceiros"
        className="py-20 px-[8%] bg-gradient-to-r from-black via-gray-900 to-black text-white"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent">
            Nossos Parceiros
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Trabalhamos lado a lado com empresas líderes que compartilham nossos
            valores de{" "}
            <span className="bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent font-semibold">
              excelência
            </span>{" "}
            e{" "}
            <span className="bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent font-semibold">
              inovação
            </span>
            , criando conexões estratégicas para o crescimento sustentável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-amber-500/30 transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon"
              className="h-8 md:h-10 object-contain mb-4"
            />
            <h3 className="text-lg font-bold text-white">Amazon</h3>
            <p className="text-gray-400 text-sm mt-2 text-center">
              Parceiro em soluções digitais e tecnologia.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-amber-500/30 transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="h-8 md:h-10 object-contain mb-4"
            />
            <h3 className="text-lg font-bold text-white">Apple</h3>
            <p className="text-gray-400 text-sm mt-2 text-center">
              Inovação e design aplicados ao mundo corporativo.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-amber-500/30 transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              alt="Microsoft"
              className="h-8 md:h-10 object-contain mb-4"
            />
            <h3 className="text-lg font-bold text-white">Microsoft</h3>
            <p className="text-gray-400 text-sm mt-2 text-center">
              Parceiro estratégico em soluções corporativas e cloud.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-amber-500/30 transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google"
              className="h-8 md:h-10 object-contain mb-4"
            />
            <h3 className="text-lg font-bold text-white">Google</h3>
            <p className="text-gray-400 text-sm mt-2 text-center">
              Parceiro em inteligência de dados e inovação digital.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-black via-gray-900 to-black py-16 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-6 text-center bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-300 mb-10 text-center max-w-2xl mx-auto">
            Preencha o formulário abaixo e nossa equipe retornará o contato por
            e-mail o mais rápido possível.
          </p>

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
    </div>
  );
}
