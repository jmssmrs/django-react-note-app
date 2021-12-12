module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: {
      colormain: "#f68657",
      colortext: "#d6d1d1",
      colordark: "#f5f6f7",
      colorgray: "#999",
      colorbg: "#1f2124",
      colorlighter: "#292a2c",
      colorwhite: "#2e3235",
      colorborder: "#252629",
    },
    extend: {
      height: (theme) => ({
        "screen/2": "88vh",
        "screen/3": "65vh",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
