import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { RouterData } from "./RouterData";
import { lazy } from "react";
import Resourses from "../_root/Pages/Resourses";
import StudyMaterials from "../_root/Pages/StudyMaterials";

const Home = lazy(() => import("../_root/Pages/Home"));
const About = lazy(() => import("../_root/Pages/About"));
const Gallery = lazy(() => import("../_root/Pages/Gallery"));
const Faculties = lazy(() => import("../_root/Pages/Faculties"));
const Courses = lazy(() => import("../_root/Pages/Courses"));
const Contact = lazy(() => import("../_root/Pages/Contact"));
const Brochure = lazy(() => import("../_root/Pages/Brochure"));
const PrivacyPolicy = lazy(() => import("../_root/Pages/PrivacyPolicy"));
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: RouterData.home,
        element: <Home />,
      },
      {
        path: RouterData.about,
        element: <About />,
      },
      {
        path: RouterData.courses,
        element: <Courses />,
      },
      {
        path: RouterData.faculties,
        element: <Faculties />,
      },
      {
        path: RouterData.gallery,
        element: <Gallery />,
      },
      {
        path: RouterData.contact,
        element: <Contact />,
      },
      {
        path: RouterData.resourses,
        element: <Resourses />,
      },
      {
        path: RouterData.studyMaterials,
        element: <StudyMaterials />,
      },
      {
        path: RouterData.brochure,
        element: <Brochure />,
      },
      {
        path: RouterData.privacyPolicy,
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

export default AppRouter;
