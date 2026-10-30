import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Your page components
import Dashboard from "@/pages/Dashboard";
import Positions from "@/pages/Positions";
import Correlation from "@/pages/Correlation";
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
        path: "/correlation",
        element: <Correlation />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
