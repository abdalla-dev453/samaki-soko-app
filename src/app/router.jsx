import {
  createBrowserRouter,
} from "react-router-dom"

import MainLayout from "../layouts/MainLayout"
import ProtectedRoute from "../components/ProtectedRoute"

import Home from "../pages/Home"
import Market from "../pages/Market"
import ListingDetails from "../pages/ListingDetails"
import SellerProfile from "../pages/SellerProfile"
import Login from "../pages/Login"
import Dashboard from "../pages/Dashboard"
import AddListing from "../pages/AddListing"
import EditListing from "../pages/EditListing"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "market",
        element: <Market />,
      },

      {
        path: "market/:id",
        element: <ListingDetails />,
      },

      {
        path: "sellers/:id",
        element: <SellerProfile />,
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },

      {
        path: "dashboard/add",
        element: (
          <ProtectedRoute>
            <AddListing />
          </ProtectedRoute>
        ),
      },

      {
        path: "dashboard/listings/:id/edit",
        element: (
          <ProtectedRoute>
            <EditListing />
          </ProtectedRoute>
        ),
      },
    ],
  },
])

export default router;