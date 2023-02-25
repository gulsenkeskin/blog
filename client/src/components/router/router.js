import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Single from "../../pages/Single";
import Write from "../../pages/Write";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/post/:id",
        element: <Home></Home>,
      },
      {
        path: "/write",
        element: <Write></Write>,
      },
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
