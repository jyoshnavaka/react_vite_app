import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TaskManagement from "./taskManagement";
import MarkedTasks from "./dIsplayTable"

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
