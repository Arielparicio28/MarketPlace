// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contact from './components/Contact/Contact';
import NotFoundPage from './components/NotFoundPage';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './routes/Home'
import Content from './components/Content/Content';
import 'bootstrap/dist/css/bootstrap.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/content",
        element: <Content/>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
  
      {
        path: "/notfoundpage",
        element: <NotFoundPage/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
