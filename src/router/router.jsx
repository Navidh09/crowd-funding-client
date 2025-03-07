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
import UpdateCampaigns from "../pages/UpdateCampaigns";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:4000/campaigns6"),
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
        loader: ({ params }) =>
          fetch(`http://localhost:4000/campaign/${params.id}`),
      },
      {
        path: "/campaigns",
        element: <Campaigns></Campaigns>,
        loader: () => fetch("http://localhost:4000/campaigns"),
      },
      {
        path: "/myCampaign",
        element: <MyCampaign></MyCampaign>,
        loader: () => fetch("http://localhost:4000/myCampaign"),
      },
      {
        path: "/update/:id",
        element: <UpdateCampaigns></UpdateCampaigns>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/update/${params.id}`),
      },
      {
        path: "/myDonation",
        element: (
          <PrivateRoute>
            <MyDonation></MyDonation>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:4000/donations"),
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
