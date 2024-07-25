import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./css/index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Deck from "./components/Deck";
import Header from "./components/Header";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/decks/:deckId",
    element: <Deck />,
  },
  {
    path: "register",
    element: <RegisterPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="page">
      <Header />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
