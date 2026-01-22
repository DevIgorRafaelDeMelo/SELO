export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1E40AF", // azul royal
          dark: "#1E3A8A",
        },
        accent: {
          DEFAULT: "#7C3AED", // roxo vibrante
          dark: "#6D28D9",
        },
        highlight: {
          DEFAULT: "#FACC15", // amarelo ouro
          dark: "#EAB308",
        },
      },
    },
  },
  plugins: [],
};
