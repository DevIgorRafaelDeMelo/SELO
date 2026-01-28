import React from "react";
import Header from "./Conponentes/Header";

export default function Contato() {
  return (
    <div className="bg-white shadow-lg rounded-lg mt-20">
      <Header />
      <h1 className="text-3xl font-bold mb-4 text-amber-500">Contato</h1>
      <p className="mb-6 text-gray-700">
        Entre em contato conosco preenchendo o formulário abaixo:
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Seu nome"
          className="w-full p-2 border rounded focus:ring focus:ring-amber-400"
        />
        <input
          type="email"
          placeholder="Seu email"
          className="w-full p-2 border rounded focus:ring focus:ring-amber-400"
        />
        <textarea
          placeholder="Sua mensagem"
          rows="4"
          className="w-full p-2 border rounded focus:ring focus:ring-amber-400"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-amber-400 text-black font-semibold py-2 rounded hover:bg-amber-500 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
