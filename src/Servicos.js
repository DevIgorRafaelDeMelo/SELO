import React from "react";
import { useState } from "react";
import logo from "./assets/Simbulo.png";
import {
  FaBook,
  FaBalanceScale,
  FaUsersCog,
  FaUsers,
  FaRegLightbulb,
  FaShieldAlt,
  FaRocket,
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaChartLine,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import Header from "./Conponentes/Header";

export default function Servicos() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
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
      <section
        id="servicos"
        className="py-16 px-[10%] bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white"
      >
        <div className="text-center my-12">
          <h2 className="text-3xl font-extrabold mb-3 bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent">
            Serviços
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Soluções contábeis modernas para apoiar o crescimento da sua empresa
            com experiência, tecnologia e transparência.
          </p>
        </div>

        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Estruturação e Regularização de Empresas */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-amber-500/30 transition-transform duration-300">
            <FaBook className="h-16 w-16 text-[#cea664] mb-4" />
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

          {/* Contabilidade Gerencial e Fiscal */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-amber-500/30 transition-transform duration-300">
            <FaBalanceScale className="h-16 w-16 text-[#cea664] mb-4" />
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

          {/* Soluções para Folha de Pagamento */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-amber-500/30 transition-transform duration-300">
            <FaUsersCog className="h-16 w-16 text-[#cea664] mb-4" />
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

          <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row gap-10 justify-center">
            <div className="bg-gray-800 rounded-xl w-full md:w-1/2 lg:w-1/3 shadow-lg p-8 flex flex-col items-center text-center hover:shadow-amber-500/30 transition-transform duration-300">
              <FaChartLine className="h-16 w-16 text-[#cea664] mb-4" />
              <h3 className="text-2xl font-bold mb-3">
                Consultoria Empresarial
              </h3>
              <p className="text-gray-400 mb-4">
                Apoio estratégico para melhorar processos, reduzir custos e
                aumentar a eficiência organizacional.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Diagnóstico financeiro e organizacional</li>
                <li>Estruturação de processos e rotinas</li>
                <li>Planejamento estratégico</li>
                <li>Redução de custos</li>
                <li>Implementação de melhorias</li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-xl w-full md:w-1/2 lg:w-1/3 shadow-lg p-8 flex flex-col items-center text-center hover:shadow-amber-500/30 transition-transform duration-300">
              <FaFileInvoiceDollar className="h-16 w-16 text-[#cea664] mb-4" />
              <h3 className="text-2xl font-bold mb-3">
                Respaldo Tributário para Pessoas Físicas
              </h3>
              <p className="text-gray-400 mb-4">
                Orientação completa para manter sua regularidade fiscal e evitar
                autuações.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Apuração de ganhos com criptoativos</li>
                <li>Suporte para investimentos no Brasil e exterior</li>
                <li>Apuração de GCAP, Carnê-Leão e IRPF</li>
                <li>Prevenção de autuações fiscais</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="apresentacao"
        className="py-20 px-[8%] bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">
            Por que escolher a{" "}
            <span className="bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent">
              Elo
            </span>
            ?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Conheça os diferenciais que tornam nossa parceria estratégica para o
            sucesso da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {[
            {
              icon: <FaRegLightbulb size={32} />,
              title: "Soluções Personalizadas",
              desc: "Sob medida para gerar valor duradouro.",
            },
            {
              icon: <FaUsers size={32} />,
              title: "Profissionais Experientes",
              desc: "Equipe qualificada e em constante atualização.",
            },
            {
              icon: <FaBalanceScale size={32} />,
              title: "Eficiência Operacional",
              desc: "Redução de custos e otimização tributária.",
            },
            {
              icon: <FaShieldAlt size={32} />,
              title: "Integridade",
              desc: "Ética e transparência em todas as etapas.",
            },
            {
              icon: <FaRocket size={32} />,
              title: "Respostas Rápidas",
              desc: "Agilidade e soluções eficazes.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-800 text-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-[#cea664] mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white py-12">
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
            <a href="#sobre" className="hover:text-[#cea664] transition-colors">
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
