import React from 'react'
import { Routes, Route } from "react-router-dom"
import UserRoutes from './UserRoutes'
import GuestNavBar from '../components/navBars/GuestNavBar'
import GuestRoutes from './GuestRoutes'

const MainRoutes = () => {
    return (
        <GuestRoutes />
    )
}

export default MainRoutes