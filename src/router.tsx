import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./components/layout/layout";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // children: [
    //   {
    //     path: "/folder",
    //     element: <ChromaGrid />,
    //   },
    // ],
  },
]);
export { Router };
