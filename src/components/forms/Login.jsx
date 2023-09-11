import { If, useObjectState } from 'mg-js'
import React, { useContext, useEffect, useState } from 'react'
import { apiPost } from '../../services/apiRequest'
import { LOGIN_URL } from '../../constant/urls'
import UserContext from '../../context/userContext'
import { json, useNavigate } from 'react-router-dom'

const Login = () => {
    const [form, setForm] = useObjectState(["email", "password"])
    const [error, setError] = useState("")
    const { setUser, user } = useContext(UserContext)
    const nav = useNavigate()
    const login = async (e) => {
        e.preventDefault()
        try {
            const { data } = await apiPost(LOGIN_URL, form)
            setUser(data.user)
            localStorage["x-api-key"] = data.token
            nav("/");
        } catch (error) {
            if (error.response.status == 404) setError("user not found please signup")
            else if (error.response.status == 401) setError("wrong password")
        }
    }
    return (
        <form className='mx-auto w-50 border border-2 rounded p-3 mt-4'>
            <label>email</label>
            <input onChange={(e) => setForm("email", e.target.value)} className='form-control' placeholder='enter your email' />
            <label>password</label>
            <input onChange={(e) => setForm("password", e.target.value)} className='form-control' placeholder='enter your password' />
            <div className='d-flex justify-content-center'>
                <button onClick={login} className='btn btn-success mt-3'>send</button>
            </div>
            <If condition={error}>
                <p className='text-danger mt-4'>{error}</p>
            </If>
        </form>
    )
}

export default Login