import React from 'react'
import { Route, Routes } from "react-router-dom"
import UserNavBar from '../components/navBars/UserNavBar'
import Home from '../components/Home'
import Logout from '../components/Logout'
const UserRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<UserNavBar />}>
                <Route path='/' element={<Home />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='*' element={<h1>404 not found</h1>} />
            </Route>
        </Routes>
    )
}

export default UserRoutes