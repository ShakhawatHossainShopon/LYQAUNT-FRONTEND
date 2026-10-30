import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Your page components
import Dashboard from "@/pages/Dashboard";
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
