import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './Pages/Home/Home'
import ItemView from './Pages/ItemView/ItemView'
import Cart from './Pages/Cart/Cart'
import { GeneralProvider } from './context/GeneralProvider'

import './App.css'

function App() {

  return (
    <>
      <GeneralProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/item-view/:id' element={<ItemView />}></Route>
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </GeneralProvider>
    </>
  )
}

export default App
