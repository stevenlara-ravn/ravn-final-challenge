/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extends: {
      colors: {
        "ravn-neutral": {
          1: "#FFFFFF",
          2: "#94979A",
          3: "#393D41",
          4: "#2C2F33",
          5: "#222528",
        },
        "ravn-primary": {
          1: "#F4CCC8",
          2: "#EBA59E",
          3: "#E27D73",
          4: "#DA584B",
        },
        "ravn-secondary": {
          1: "#C8E1BC",
          2: "#AAD199",
          3: "#8DC275",
          4: "#70B252",
        },
        "ravn-tertiary": {
          1: "#F9EED7",
          2: "#F2DAAB",
          3: "#EBC77F",
          4: "#E5B454",
        }
      }
    },
  },
  plugins: [],
};
