import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import TaskManagement from "./taskManagement";


function App() {
    return (

     <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Task Management</Link>
                    </li>
                  
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<TaskManagement />} />
                
            </Routes>
     </>
    );
}

export default App;
