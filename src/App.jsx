
import './App.css'
import NavBar from './components/nav'
import DefaultCarousel from "./components/carousel"
import Cards  from './components/cards'


function App() {
  return(
<>

<div style= {{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly",padding:"4px"}}>
  <Cards/>
  <Cards/>
  <Cards/>
  <Cards/>

</div>


</>
  )}
  export  default App