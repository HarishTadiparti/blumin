import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About.jsx";
import Academia from "./pages/Academia.jsx";
import Industry from "./pages/Industry.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Projects from "./pages/Projects.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/academia',
        element: <Academia />
      },
      {
        path: '/industry',
        element: <Industry />
      },
      {
        path: '/contact-us',
        element: <ContactUs />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Theme>
        <div className="poppins">
          <RouterProvider router={routers} />
        </div>
      </Theme>
    </ThemeProvider>
  </React.StrictMode>
);
