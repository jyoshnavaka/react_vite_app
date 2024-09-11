import React from "react";
import { Link, Outlet } from "react-router-dom";

function Categories(){
    return(<>
    <h2>CategoryScreen</h2>
    <Link to={"products"}>products</Link>
    <Outlet/>
    </>)
}
export default Categories