import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";
import ProjectDetails from "../Pages/Projects/ProjectDetails";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Services/Services";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Utils/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projectDetails/:id",
        element: <ProjectDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <ErrorPage/>,
      },
    ],
  },
]);
export default router;
