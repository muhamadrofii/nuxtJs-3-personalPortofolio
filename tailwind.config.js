/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        customNavy: "#0A192F",
      },
      fontFamily: {
        // sfmono: ['SF Mono', 'monospace'],
        sfmono: ['SF Mono', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

