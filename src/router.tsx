import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./components/layout/layout";
import { Home } from "./pages/Home/Home";

const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export { Router };
