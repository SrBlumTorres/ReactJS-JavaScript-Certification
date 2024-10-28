/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // Esta línea nos indica que no solamente, leerá el index.html, podemos poner carpeta, subcarpetas, etc... 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

