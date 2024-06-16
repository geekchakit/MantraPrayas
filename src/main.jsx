import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
// import "@splidejs/react-splide/css/skyblue";
// import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./router/AppRouter.jsx";

import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import store from "./store/store.js";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={AppRouter} />
        <Toaster position="top-center" reverseOrder={false} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
