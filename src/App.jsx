import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import ItemView from './Pages/ItemView/ItemView'
import Cart from './Pages/Cart/Cart'
import Category from './Pages/Category/Category'
import ProductFormData from './Pages/ProductFormContainer/ProductFormContainer'
import { GeneralProvider } from './context/GeneralProvider'
import AuthUser from './components/AuthUser/AuthUser'

import './App.css'

function App() {

  return (
    <>
      <GeneralProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/item-view/:id' element={<ItemView />}></Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='/category/:categoryId' element={<Category />} />
            <Route
              path="/create-product"
              element={
                <AuthUser>
                  <ProductFormData />
                </AuthUser>
              }
            />
          </Routes>
        </BrowserRouter>
      </GeneralProvider>
    </>
  )
}

export default App
