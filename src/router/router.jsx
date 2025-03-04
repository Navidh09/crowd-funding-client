import { createBrowserRouter } from "react-router";
import Home from "../Home";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layout/MainLayout";
import AddCampaign from "../pages/AddCampaign";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";
import CampaignDetails from "../pages/CampaignDetails";
import Campaigns from "../pages/Campaigns";
import MyCampaign from "../pages/MyCampaign";
import MyDonation from "../pages/MyDonation";

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
        element: (
          <PrivateRoute>
            <AddCampaign></AddCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "/campaign/:id",
        element: (
          <PrivateRoute>
            <CampaignDetails></CampaignDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/campaigns",
        element: <Campaigns></Campaigns>,
      },
      {
        path: "/myCampaign",
        element: <MyCampaign></MyCampaign>,
      },
      {
        path: "/myDonation",
        element: <MyDonation></MyDonation>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
