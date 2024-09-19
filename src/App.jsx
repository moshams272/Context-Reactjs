import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import { NameProvider } from './contexts/NameContext'
import { useState } from 'react'
const routes=createBrowserRouter([
  {index:true,element:<Home/> }
])
function App() {
  const [name,setName]=useState("Mohamed");
  return(
    <>
    <NameProvider value={{name,setName}}>
      <RouterProvider router={routes}/>
    </NameProvider>
    </>
  )
}

export default App
