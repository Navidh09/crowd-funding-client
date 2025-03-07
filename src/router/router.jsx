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
        loader: () => fetch("crowd-funding-server-ruby.vercel.app/campaigns6"),
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
          fetch(`crowd-funding-server-ruby.vercel.app/campaign/${params.id}`),
      },
      {
        path: "/campaigns",
        element: <Campaigns></Campaigns>,
        loader: () => fetch("crowd-funding-server-ruby.vercel.app/campaigns"),
      },
      {
        path: "/myCampaign",
        element: <MyCampaign></MyCampaign>,
        loader: () => fetch("crowd-funding-server-ruby.vercel.app/myCampaign"),
      },
      {
        path: "/update/:id",
        element: <UpdateCampaigns></UpdateCampaigns>,
        loader: ({ params }) =>
          fetch(`crowd-funding-server-ruby.vercel.app/
update/${params.id}`),
      },
      {
        path: "/myDonation",
        element: (
          <PrivateRoute>
            <MyDonation></MyDonation>
          </PrivateRoute>
        ),
        loader: () => fetch("crowd-funding-server-ruby.vercel.app/donations"),
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
