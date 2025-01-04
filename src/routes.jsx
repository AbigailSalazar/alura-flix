import BasicPage from "./pages/BasicPage/BasicPage";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NuevoVideo from "./pages/NuevoVideo";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasicPage />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/nuevo" element={<NuevoVideo />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
