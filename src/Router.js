import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Pinoak from "./Components/pages/PinOak";
import American from "./Components/pages/American";
import HoneyLocust from "./Components/pages/HoneyLocust";

const Router = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route exact path="/" element={<HoneyLocust />}></Route> */}
      <Route path="/" element={<App />}></Route>

      {/* <Route path="*" element={<Pinoak />}></Route> */}
      {/* <Route path="!" element={<American />}></Route> */}
    </Routes>
  </BrowserRouter>
);

export default Router;
