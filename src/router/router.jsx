import { createBrowserRouter } from "react-router";
import Home from "../Home";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layout/MainLayout";
import AddCampaign from "../pages/AddCampaign";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addCampaign",
        element: <AddCampaign></AddCampaign>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
