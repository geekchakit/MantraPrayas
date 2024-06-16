import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#12246D",
        "mainprimary-50": "#e7e9f0",
        "MainPrimary-100": "#b6bbd2",
        "MainPrimary-200": "#929abc",
        "MainPrimary-300": "#606c9d",
        "MainPrimary-400": "#41508a",
        "MainPrimary-500": "#12246d",
        "MainPrimary-600": "#102163",
        "MainPrimary-700": "#0d1a4d",
        "MainPrimary-800": "#0a143c",
        "MainPrimary-900": "#080f2e",
        "MainBlack-50": "#e8e8e8",
        "MainBlack-100": "#b9b9b9",
        "MainBlack-200": "#979797",
        "MainBlack-300": "#686868",
        "MainBlack-400": "#4a4a4a",
        "MainBlack-500": "#1d1d1d",
        "MainBlack-600": "#1a1a1a",
        "MainBlack-700": "#151515",
        "MainBlack-800": "#101010",
        "MainBlack-900": "#0c0c0c",
      },
      fontFamily: {
        primary: `Sora, sans-serif`,
      },
    },
  },
  plugins: [],
});
