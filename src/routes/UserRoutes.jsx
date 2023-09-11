import React from 'react'
import { Route, Routes } from "react-router-dom"
import UserNavBar from '../components/navBars/UserNavBar'
import Home from '../components/Home'
const UserRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<UserNavBar />}>
                <Route path='/' element={<Home />} />
            </Route>
        </Routes>
    )
}

export default UserRoutes