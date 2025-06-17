import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./components/layout/layout";
import Folder from "./pages/projects/Folder";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/folder",
        element: <Folder />,
      },
    ],
  },
]);
export { Router };
