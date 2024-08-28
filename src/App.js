import Login from "./components/Login";
import Browser from "./components/Browser";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browser",
      element: <Browser />
    }
  ]);
  return (
    <RouterProvider router={approuter} />
  );
}

export default App;
