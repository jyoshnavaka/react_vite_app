import axios from "axios"
import { useEffect, useState } from "react"

export const TableNav = () => {
    const [data, setData] = useState([])
    const [query, setQuery] = useState("")
    useEffect(() => {
        fetchData();
    }, [query])
    const fetchData = async () => {
        const { data } = await axios.get(`https://dummyjson.com/recipes/search?q=${query}`)
        //console.log(data.recipes)
        setData(data.recipes);
    }
    const search = async (event) => {
        setQuery(event.target.value)
        1
    }

    return (
        <>
            <input type="search" placeholder="search" value={query} onChange={search} />
            <table border={1}>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>image</td>
                    <td>
                        prepTimeMinutes
                    </td>
                    <td>details</td>
                </tr>
                {
                    data.map((each) => {
                        return (
                            <tr>
                                <td>{each.id}</td>
                                <td>{each.name}</td>
                                <td><img src={each.image} style={{ width: 100, height: 100 }} /></td>
                                <td>{each.prepTimeMinutes} Minutes
                                </td>
                                <td><button>View details</button></td>
                            </tr>
                        )
                    })
                }
            </table>

        </>
    )
}