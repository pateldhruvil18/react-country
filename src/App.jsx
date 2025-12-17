import React from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Country from './pages/Country';
import ErrorPage from './pages/ErrorPage';

import AppLayout from './components/AppLayout';
import CountryDetails from './components/CountryDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "country/:id",
        element: <CountryDetails/>
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "country",
        element: <Country />
      },

    ]
  }

])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App