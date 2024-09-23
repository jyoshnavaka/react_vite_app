import { useContext } from "react";
import { Global } from "./taskManagement";

function MarkedTasks() {
    const mark = useContext(Global); 

    return (
        <>
            <h1>Marked as Done Tasks</h1>
            <table border="1">
            {
                mark.map((each, index) => (
                    <tr>
                        <td>{each.name}</td>
                        <td>{each.designation}</td>
                  
                        <td>{each.startDate}</td>
                        <td>{each.endDate}</td>
                        <td>{each.priority}</td>
                    </tr>
                    
                ))
            }
            </table>
        </>
    );
}

export default MarkedTasks;
