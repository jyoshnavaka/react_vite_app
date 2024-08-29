import { Component } from "react";

export class Bulb extends Component {
    state = {
        data: []
    }
    addBulb = () => {
        const add = { img2: "https://tse4.mm.bing.net/th?id=OIP.ygR9-EjH_N-vXQXM7QMhngHaHk&pid=Api&P=0&h=180", img1: "https://tse4.mm.bing.net/th?id=OIP.maWRvjA73l5CT719MqvdSAHaHk&pid=Api&P=0&h=180", f: true }
        const emp = [...this.state.data, add]
        this.setState({
            data: emp
        })
    }
    removeCard = (index) => {
        const newData = this.state.data.filter((_, i) => (i != index)
        )
        this.setState({
            data: newData
        })
    }
    onBulb = (index) => {
        const newData = [...this.state.data]

        newData[index].f = !newData[index].f
        this.setState({
            data: newData
        })
    }
    render() {
        let count = 0;
        return (
            <>

                <button onClick={this.addBulb}>Add</button>
                {

                    this.state.data.map((each, index) => {

                        if (!each.f) {
                            count = count + 1
                        }
                        return (
                            <>
                                <div style={{ display: "inline-block", margin: 10 }}>
                                    {/* const a=(f)?this.state.data[index]["img1"]:this.state.data[index]["img2"] */}
                                    <img src={(this.state.data[index].f) ? this.state.data[index]["img1"] : this.state.data[index]["img2"]} 
                                    style={{ width: 200, height: 200 }} onClick={() => { this.onBulb(index) }} />
                                    <button style={{ display: "block" }} onClick={() => { this.removeCard(index) }}>remove</button>

                                </div>

                            </>
                        )
                    })
                }
                <p>{`${count} Bulbs on`}</p>
            </>
        )
    }
}