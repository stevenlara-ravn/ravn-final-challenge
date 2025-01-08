const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
          5: "#3f1410"
        },
        "ravn-secondary": {
          1: "#C8E1BC",
          2: "#AAD199",
          3: "#8DC275",
          4: "#70B252",
          5: "#14240f"
        },
        "ravn-tertiary": {
          1: "#F9EED7",
          2: "#F2DAAB",
          3: "#EBC77F",
          4: "#E5B454",
          5: "#3b190d"
        },
        "ravn-blue-1": "#2F61BF"
      },
      fontFamily: {
        SFProDisplay: ["SF Pro Display", "sans-serif"],
      },
    },
  },
  plugins: [
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addUtilities }) => {
      addUtilities({
        ".text-display-xl-regular": {
          "fontSize": "64px",
          "lineHeight": "88px",
          "letterSpacing": "1px",
          "fontWeight": "400",
          "fontFamily": "\"SF Compact Display\", sans-serif"
        },
        ".text-display-l-regular": {
          "fontSize": "56px",
          "lineHeight": "72px",
          "letterSpacing": "1px",
          "fontWeight": "400",
          "fontFamily": "\"SF Pro Display\", sans-serif"
        },
        ".text-display-m-regular": {
          "fontSize": "48px",
          "lineHeight": "56px",
          "letterSpacing": "1px",
          "fontWeight": "400",
          "fontFamily": "\"SF Pro Display\", sans-serif"
        },
        ".text-display-s-regular": {
          "fontSize": "32px",
          "lineHeight": "48px",
          "letterSpacing": "1px",
          "fontWeight": "400",
          "fontFamily": "\"SF Pro Display\", sans-serif"
        },
        ".text-display-xs-regular": {
          "fontSize": "24px",
          "lineHeight": "32px",
          "letterSpacing": "1px",
          "fontWeight": "400",
          "fontFamily": "\"SF Pro Display\", sans-serif"
        },
        ".text-display-xl-bold": {
          "fontSize": "64px",
          "lineHeight": "88px",
          "letterSpacing": "1px",
          "fontWeight": "700",
          "fontFamily": "\"SF Pro Display\", sans-serif"
        },
        ".text-display-l-bold": {
          "fontSize": "56px",
          "lineHeight": "72px",
          "letterSpacing": "1px",
          "fontWeight": "700",
          "fontFamily": "\"SF Pro Display\", sans-serif"
        },
        ".text-display-m-bold": {
          "fontSize": "48px",
          "lineHeight": "56px",
          "letterSpacing": "1px",
          "fontWeight": "700",
          "fontFamily": "\"SF Pro Display\", sans-serif"
        },
        ".text-display-s-bold": {
          "fontSize": "32px",
          "lineHeight": "48px",
          "letterSpacing": "1px",
          "fontWeight": "700",
          "fontFamily": "\"SF Pro Display\", sans-serif"
        },
        ".text-display-xs": {
          "fontSize": "24px",
          "lineHeight": "32px",
          "letterSpacing": "1px",
          "fontWeight": "700",
          "fontFamily": "\"SF Pro Display\", sans-serif"
        },
        ".text-body-xl-regular": {
          "fontSize": "20px",
          "lineHeight": "32px",
          "letterSpacing": "0.75px",
          "fontWeight": "400",
          "fontFamily": "\"SF Pro Display\", sans-serif"
        },
        ".text-body-l-regular": {
          "fontSize": "18px",
          "lineHeight": "32px",
          "letterSpacing": "0.75px",
          "fontWeight": "400",
          "fontFamily": "\"SF Pro Display\", sans-serif"
        },
        ".text-body-m-regular": {
          "fontSize": "15px",
          "lineHeight": "24px",
          "letterSpacing": "0.75px",
          "fontWeight": "400",
          "fontFamily": "\"SF Pro Display\", sans-serif"
        },
        ".text-body-s-regular": {
          "fontSize": "13px",
          "lineHeight": "22px",
          "letterSpacing": "0.25px",
          "fontWeight": "400",
          "fontFamily": "\"SF Pro Display\", sans-serif"
        },
        ".text-body-xl-bold": {
          "fontSize": "20px",
          "lineHeight": "32px",
          "letterSpacing": "0.75px",
          "fontWeight": "600",
          "fontFamily": "\"SF Pro Display\", sans-serif"
        },
        ".text-body-l-bold": {
          "fontSize": "18px",
          "lineHeight": "32px",
          "letterSpacing": "0.75px",
          "fontWeight": "600",
          "fontFamily": "\"SF Pro Display\", sans-serif"
        },
        ".text-body-m-bold": {
          "fontSize": "15px",
          "lineHeight": "24px",
          "letterSpacing": "0.75px",
          "fontWeight": "600",
          "fontFamily": "\"SF Pro Display\", sans-serif"
        },
        ".text-body-s-bold": {
          "fontSize": "13px",
          "lineHeight": "22px",
          "letterSpacing": "0.25px",
          "fontWeight": "600",
          "fontFamily": "\"SF Pro Display\", sans-serif"
        },
        ".no-scrollbar::-webkit-scrollbar": {
          "display": "none"
        },
        ".touch-none": {
          "touchAction": "none"
        }
      });
    }
  ],
};
