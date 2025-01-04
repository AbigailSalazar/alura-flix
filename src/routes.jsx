import BasicPage from "./pages/BasicPage/BasicPage";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function AppRoutes(){
    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<BasicPage/>}>
                        <Route path="/" element={<Home/>}></Route>
                    </Route>
                </Routes>  
        </BrowserRouter>
    )
}

export default AppRoutes;