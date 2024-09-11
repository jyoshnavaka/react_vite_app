import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards, {  Count, Loader, Toast } from './index.jsx'
import { Converter } from './class/classcomponent.jsx'
import { FakeStoreData } from './class/fetchandAxios.jsx'
import { AddDelete } from './class/AddandDelete.jsx'
import { Bulb } from './class/buld.jsx'
import { Form, Table } from 'react-bootstrap'
import { CustomTable } from './class/table.jsx'
import { Weather } from './class/weather.jsx'
import { EvenOdd } from './functional/evenorodd.jsx'
import { FormValidation } from './functional/formvalidation.jsx'
import { DynamicTable } from './class/dynamictable.jsx'
import { DisplayItems } from './class/display.jsx'
import{TableForm} from './functional/formTable.jsx'
import { TableFormUpdate } from './functional/formUpdate.jsx'
import Navigation from './functional/navbar.jsx'
import { TableNav } from './functional/tableSearch.jsx'
import Reducer from './functional/reducer.jsx'

// import List from './component/component'
// import Table from './table'
function App() {
  // click=(onpress)={
  //  // return( <input type="tel" value={name}/>)
  // }

  return(

  
<>
{/* <Cards text='hello'>
  <h4>Children</h4>
  <Toast></Toast>
  </Cards>
<Count></Count>
<Loader height={100} width={100}></Loader> */}


{/* <Converter  ></Converter> */}
 {/* <FakeStoreData></FakeStoreData> */}
 {/* <Bulb></Bulb> */}
 {/* <CustomTable></CustomTable> */}
{/* <AddDelete></AddDelete> */}
<Weather></Weather>
{/* <EvenOdd></EvenOdd> */}
{/* <FormValidation></FormValidation> */}
{/* <DynamicTable></DynamicTable> */}
{/* <DisplayItems></DisplayItems> */}
{/* <TableForm></TableForm> */}
{/* <TableFormUpdate></TableFormUpdate> */}
{/* <Navigation>
</Navigation> */}
{/* <TableNav></TableNav> */}
{/* <Reducer></Reducer> */}

</>
  )}



  export  default App