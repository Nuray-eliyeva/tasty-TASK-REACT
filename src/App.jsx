import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './Pages/Add'
import Home from './Pages/Home'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route element={<Home/>} path="/"></Route>
    <Route element={<Add/>} path="/add"></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App