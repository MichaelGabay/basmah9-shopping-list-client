import React, { useContext } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import UserRoutes from './UserRoutes'
import GuestRoutes from './GuestRoutes'

import UserContext from '../context/userContext'
import axios from 'axios'
const MainRoutes = () => {
    const { user } = useContext(UserContext)
    const nav = useNavigate()
    axios.interceptors.response.use(
        response => response,
        ({ response: { status } }) => {
            if (status == 401) {
                nav("/logout")
            }
            return Promise.reject(error);
        }
    );
    if (user)
        return <UserRoutes />
    else return <GuestRoutes />

}

export default MainRoutes