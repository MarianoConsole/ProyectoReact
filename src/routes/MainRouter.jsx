import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home'
import { NavBar } from '../components';
import { Item } from '../pages';


export const MainRouter = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/item/:id' element={<Item/>}/>
        <Route path='/category/:categoryId' element={<Category/>}/>
    </Routes>
    </BrowserRouter>
  );
};
