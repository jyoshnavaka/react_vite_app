import { createContext } from "react";
import { useEffect, useState } from "react";

import MarkedTasks from "./dIsplayTable";

export const Global = createContext();

function TaskManagement() {
    const [input, setInput] = useState({
        name: "",
        designation: "",
        startDate: "",
        endDate: "",
        priority: "",
    });

    const [object, setObject] = useState([]);
    const [index, setIndex] = useState(null);
    const [mark, setMark] = useState([]);
    const [search, setSearch] = useState("");
    const [searchFilter, setSearchFilter] = useState([]);

    useEffect(() => {
        setSearchFilter(object);
    }, [object]);

    const handlerInput = (event) => {
        const { name, value } = event.target;
        setInput({ ...input, [name]: value });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (index != null) {
            const b = [...object];
            b[index] = input;
            setObject(b);
            setIndex(null);
        } else {
            setObject([...object, input]);
        }

        setInput({
            name: "",
            designation: "",
            startDate: "",
            endDate: "",
            priority: "",
        });
    };

    const onDelete = (ind) => {
        const a = object.filter((_, index) => ind !== index);
        setObject(a);
    };

    const onUpdate = (ind) => {
        setInput(object[ind]);
        setIndex(ind);
    };

    const onMark = (ind) => {
        const markedTask = object[ind];
        setMark((prevMark) => [...prevMark, markedTask]);
    };

    const onSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        setSearch(searchTerm);
        const filtered = object.filter((each) =>
            each.name.toLowerCase().includes(searchTerm)
        );
        setSearchFilter(filtered);
    };

    return (
        <>
         
            <Global.Provider value={mark}>
               <MarkedTasks />
               </Global.Provider>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input value={input.name} name="name" type="text" onChange={handlerInput} />
                    <br />
                    <label htmlFor="designation">Designation :</label>
                    <input value={input.designation} name="designation" type="text" onChange={handlerInput} />
                    <br />
                    <label htmlFor="startDate">Date of Start :</label>
                    <input value={input.startDate} name="startDate" type="date" onChange={handlerInput} />
                    <br />
                    <label htmlFor="endDate">Date of End :</label>
                    <input value={input.endDate} name="endDate" type="date" onChange={handlerInput} />
                    <br />
                    <label htmlFor="priority">Priority :</label>
                    <select name="priority" value={input.priority} onChange={handlerInput}>
                        <option value="">none</option>
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                    </select>
                    <br />
                    <input type="submit" onClick={onSubmit} />
                </form>

                <form>
                    <input type="search" onChange={onSearch} value={search} />
                    <select onChange={onSearch} value={search}>
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                    </select>
                </form>

                <table>
                    {searchFilter.map((each, index) => (
                        <tr key={index}>
                            <td>{each.name}</td>
                            <td>{each.designation}</td>
                            <td>{each.startDate}</td>
                            <td>{each.endDate}</td>
                            <td>{each.priority}</td>
                            <td><button onClick={() => onUpdate(index)}>Update</button></td>
                            <td><button onClick={() => onDelete(index)}>Delete</button></td>
                            <td><button onClick={() => onMark(index)}>mark as done</button></td>
                        </tr>
                    ))}
                </table>
            
        </>
    );
}

export default TaskManagement;
