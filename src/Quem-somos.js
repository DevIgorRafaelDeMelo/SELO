import React from "react";
import Header from "./Conponentes/Header";
import bgImage from "./assets/flat-lay-workstation-with-copy-space-stapler.jpg";
import bgequipe from "./assets/IMG_8332.jpg";
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import logo from "./assets/Simbulo.png";

export default function QuemSomos() {
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
      <div
        className="relative min-h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 pb-20">
          <Header />
          <div className="h-[10vh]"></div>
          <div className="max-w-5xl mx-auto p-12">
            <h1 className="text-5xl text-center font-bold mb-8 bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent drop-shadow-lg">
              Quem Somos
            </h1>

            <p className="text-lg text-gray-100 leading-relaxed mb-10 text-center">
              A{" "}
              <span className="font-semibold text-center bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent">
                Elo Soluções Empresariais
              </span>{" "}
              vai além de um escritório de contabilidade — somos parceiros
              estratégicos comprometidos com a gestão eficiente e o crescimento
              sustentável das empresas.
              <br />
              <br />
              Atuamos com foco em eficiência tributária, transparência e
              inovação, oferecendo soluções completas em contabilidade, fiscal,
              trabalhista, estruturação societária e consultoria empresarial.
              <br />
              <br />
              <span className="font-semibold bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent"></span>{" "}
              <h1 className="text-5xl text-center font-bold mb-8 bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent drop-shadow-lg">
                Missão
              </h1>
              <p className="text-lg text-gray-100 leading-relaxed mb-10">
                Oferecer soluções empresariais inovadoras e precisas, unindo
                inteligência artificial e talento humano para impulsionar o
                sucesso dos clientes.
              </p>
              <h1 className="text-5xl text-center font-bold mb-8 bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent drop-shadow-lg">
                Visão
              </h1>
              <p className="text-lg text-gray-100 leading-relaxed mb-10">
                Ser referência em transformação digital, com foco em automação,
                análise preditiva e integração inteligente de dados.
              </p>
            </p>

            <h1 className="text-5xl text-center font-bold mb-8 bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent drop-shadow-lg">
              Valores
            </h1>

            <p className="text-lg text-center text-gray-100 leading-relaxed mb-10">
              A Inovação com responsabilidade: buscamos a inovação constante em
              todos os aspectos do nosso trabalho, sempre com prudência e foco
              na segurança dos nossos clientes.
              <br />
              <br />
              Confiança e transparência: atuamos com ética e transparência,
              garantindo que nossos clientes tenham clareza e segurança em cada
              etapa dos serviços prestados.
              <br />
              <br />
              Excelência e comprometimento: cada membro da nossa equipe é
              comprometido com a excelência, buscando entregar sempre o melhor
              para cada cliente
              <br />
              <br />
              Adaptabilidade e flexibilidade: acompanhamos as mudanças do
              mercado, ajustando nossas estratégias e tecnologias para atender
              às necessidades únicas de cada cliente.
              <br />
              <br />
              Trabalho colaborativo: valorizamos a colaboração dentro da equipe
              e com nossos clientes, pois acreditamos que os melhores resultados
              vêm da união de esforços e ideias.
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-gradient-to-r from-black via-black-300 to-black text-white py-12">
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
