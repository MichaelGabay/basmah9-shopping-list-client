import React, { useContext, useEffect } from 'react'
import UserContext from '../context/userContext'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const { setUser } = useContext(UserContext)
    const nav = useNavigate()
    useEffect(() => {
        localStorage.removeItem("x-api-key")
        setUser(null)
        nav("/")
    }, [])
    return (
        <div></div>
    )
}

export default Logout