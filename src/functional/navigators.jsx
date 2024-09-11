import { Routes,Route } from "react-router-dom";
// import Home from "./screen/home";
import Categories from "./screen/Categories";
import Mukesh from "./navbar";
import Home from "./navbar";

function Navigators(){
    return(<>
    <Home/>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Categories" element={<Categories/>}/>
    </Routes>
    </>)
}
export default Navigators;