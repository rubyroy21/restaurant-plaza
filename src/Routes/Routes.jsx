import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../Components/Home/Home'
import CafeDetailsPage from "../Components/royCafeDetails/royCafeDetails"

function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cafecardetailspage/:id' element={<CafeDetailsPage />} />
    </Routes>
    </>
  )
}

export default AllRoutes