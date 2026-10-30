import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Your page components
import Dashboard from "@/pages/Dashboard";
import Positions from "@/pages/Positions";
import ExitPositions from "@/pages/ExitPositions";
import Correlation from "@/pages/Correlation";
import AssetList from "@/pages/AssetList";
import MyAssets from "@/pages/MyAssets";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

// Define the router structure
const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/positions",
        element: <Positions />,
      },
      {
        path: "/all-positions",
        element: <Positions />,
      },
      {
        path: "/exit-positions",
        element: <ExitPositions />,
      },
      {
        path: "/correlation",
        element: <Correlation />,
      },
      {
        path: "/assets",
        element: <AssetList />,
      },
      {
        path: "/my-assets",
        element: <MyAssets />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
