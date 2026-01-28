import React from "react";
import Header from "./Conponentes/Header";
import bgImage from "./assets/image.png";

export default function QuemSomos() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
      <div className="relative z-10">
        <Header />
        <div className="h-[20vh]"></div>
        <div className="max-w-5xl mx-auto p-12">
          <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent drop-shadow-lg">
            Quem Somos
          </h1>

          <p className="text-lg text-gray-100 leading-relaxed mb-10">
            A{" "}
            <span className="font-semibold bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent">
              Elo Contabilidade
            </span>{" "}
            nasceu com o propósito de ser mais do que uma empresa de serviços
            contábeis: surgiu como um elo de confiança entre negócios e pessoas.
            Fundada há mais de uma década, começou sua trajetória atendendo
            pequenos empreendedores locais, oferecendo suporte próximo e
            personalizado. Com o tempo, expandiu sua atuação e se consolidou
            como referência em soluções contábeis modernas, sempre acompanhando
            as mudanças do mercado e da legislação.
            <br />
            <br />
            Nosso desenvolvimento foi marcado pela inovação e pela busca
            constante de excelência. Investimos em tecnologia, capacitação da
            equipe e em processos que garantem agilidade e precisão. Hoje,
            atendemos empresas de diferentes portes e segmentos, mantendo o
            mesmo compromisso que nos guiou desde o início: oferecer
            transparência, segurança e resultados que impulsionam o crescimento
            dos nossos clientes.
            <br />
            <br />A{" "}
            <span className="font-semibold bg-gradient-to-r from-[#cea664] via-[#6f5431] to-[#956930] bg-clip-text text-transparent">
              Elo
            </span>{" "}
            é, acima de tudo, uma parceira estratégica. Mais do que números,
            trabalhamos para construir histórias de sucesso, fortalecendo cada
            negócio com dedicação e profissionalismo.
          </p>
        </div>
      </div>
    </div>
  );
}
