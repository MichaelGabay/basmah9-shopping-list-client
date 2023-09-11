import React from 'react'
import { Route, Routes } from 'react-router-dom'
import GuestNavBar from '../components/navBars/GuestNavBar'
import Home from '../components/Home'
import Signup from "../components/forms/Signup"
import Login from '../components/forms/Login'

const GuestRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<GuestNavBar />}>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
            </Route>
        </Routes>
    )
}

export default GuestRoutes