import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./components/layout/layout";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);
export { Router };
