import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router";

import "./styles/variaveis.css";

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
