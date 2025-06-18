import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./components/layout/layout";
import ChromaGrid from "./components/LadoDireito/projetos/ChromaGrid";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/folder",
        element: <ChromaGrid />,
      },
    ],
  },
]);
export { Router };
