import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './css/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Deck from './components/Deck.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:     <App />,
  },  
  {
    path: "/decks/:deckid",
    element:     <Deck />,
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={router} />


  </React.StrictMode>,
)
